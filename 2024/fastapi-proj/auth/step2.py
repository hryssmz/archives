from typing import Annotated, TypedDict, Optional

from fastapi import Depends, FastAPI, status
from fastapi.exceptions import HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class UserDict(TypedDict):
    username: str
    full_name: Optional[str]
    email: Optional[str]
    disabled: Optional[bool]


class UserInDBDict(UserDict):
    hashed_password: str


class User(BaseModel):
    username: str
    full_name: Optional[str] = None
    email: Optional[str] = None
    disabled: Optional[bool] = None


class UserInDB(User):
    hashed_password: str


class Token(BaseModel):
    access_token: str
    token_type: str


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return get_password_hash(plain_password) == hashed_password


def get_password_hash(password: str) -> str:
    return "fakepasswordhash" + password


fake_users_db: dict[str, UserInDBDict] = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": get_password_hash("secret"),
        "disabled": False,
    },
    "alice": {
        "username": "alice",
        "full_name": "Alice Wonderson",
        "email": "alice@example.com",
        "hashed_password": get_password_hash("secret2"),
        "disabled": True,
    },
}


@app.post("/token", response_model=Token)
async def login(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
) -> Token:
    user_dict = fake_users_db.get(form_data.username, None)
    if user_dict is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect username or password",
        )
    user = UserInDB(**user_dict)
    if not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect username or password",
        )
    return Token(access_token=user.username, token_type="bearer")


@app.get("/token", response_model=str)
async def token(token: Annotated[str, Depends(oauth2_scheme)]) -> str:
    return token
