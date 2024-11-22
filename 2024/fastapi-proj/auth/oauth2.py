import json
from typing import Annotated, Optional
import uuid

from fastapi import Depends, FastAPI, Form, status
from fastapi.responses import RedirectResponse
from fastapi.security import OAuth2AuthorizationCodeBearer
from pydantic import BaseModel
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    user_pool_domain_url: str = ""


class OAuth2Token(BaseModel):
    access_token: str
    id_token: str
    refresh_token: str
    token_type: str
    expires_in: int


class HelloWorld(BaseModel):
    token: str
    message: str


class HealthCheck(BaseModel):
    pass


settings = Settings()
app = FastAPI()

oauth2_scheme = OAuth2AuthorizationCodeBearer(
    scheme_name="cognito",
    description="Cognito OAuth2 scheme",
    authorizationUrl=f"{settings.user_pool_domain_url}/oauth2/authorize",
    tokenUrl=f"{settings.user_pool_domain_url}/oauth2/token",
    refreshUrl=f"{settings.user_pool_domain_url}/oauth2/token",
    scopes={
        "email": "Email",
        "phone": "Phone",
        "openid": "OpenID",
        "profile": "Profile",
        "aws.cognito.signin.user.admin": "Cognito",
    },
)


@app.post("/oauth2/token", response_model=OAuth2Token)
async def fake_oauth2_token(
    grant_type: Annotated[str, Form()],
    code: Annotated[str, Form()],
    client_id: Annotated[str, Form()],
    redirect_uri: Annotated[str, Form()],
    client_secret: Annotated[Optional[str], Form()] = None,
    refresh_token: Annotated[Optional[str], Form()] = None,
) -> OAuth2Token:
    form = {
        "grant_type": grant_type,
        "code": code,
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "refresh_token": refresh_token,
        "client_secret": client_secret,
    }
    print(json.dumps(form, indent=2, ensure_ascii=False))
    fake_token = OAuth2Token(
        access_token="fake_access_token",
        id_token="fake_id_token",
        refresh_token="fake_refresh_token",
        token_type="Bearer",
        expires_in=3600,
    )
    return fake_token


@app.get("/oauth2/authorize", status_code=status.HTTP_302_FOUND)
async def fake_oauth2_authorize(
    response_type: str,
    client_id: str,
    redirect_uri: str,
    state: Optional[str],
    scope: Optional[str],
) -> RedirectResponse:
    query_params = {
        "response_type": response_type,
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "state": state,
        "scope": scope,
    }
    print(json.dumps(query_params, indent=2, ensure_ascii=False))
    code = str(uuid.uuid4())
    url = f"{redirect_uri}?code={code}&state={state}"
    return RedirectResponse(url=url, status_code=status.HTTP_302_FOUND)


@app.get("/hello", response_model=HelloWorld)
async def hello(token: Annotated[str, Depends(oauth2_scheme)]) -> HelloWorld:
    return HelloWorld(token=token, message="Hello World!")


@app.get("/", response_model=HealthCheck)
async def health_check() -> HealthCheck:
    return HealthCheck()
