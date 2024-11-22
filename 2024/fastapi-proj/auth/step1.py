import json
from typing import Annotated

from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class Token(BaseModel):
    access_token: str
    token_type: str


@app.post("/token", response_model=Token)
async def login(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
) -> Token:
    form_data_dict = {
        "username": form_data.username,
        "password": form_data.password,
        "client_id": form_data.client_id,
        "client_secret": form_data.client_secret,
        "grant_type": form_data.grant_type,
        "scopes": form_data.scopes,
    }
    print(json.dumps(form_data_dict, indent=2, ensure_ascii=False))
    return Token(access_token=form_data.username, token_type="bearer")


@app.get("/token", response_model=str)
async def token(token: Annotated[str, Depends(oauth2_scheme)]) -> str:
    return token
