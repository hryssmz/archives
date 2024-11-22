from typing import TypedDict

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class UserDict(TypedDict):
    username: str


class UserModel(BaseModel):
    username: str


@router.get("/users/", tags=["users"], response_model=list[UserModel])
async def read_users() -> list[UserDict]:
    return [{"username": "Rick"}, {"username": "Morty"}]


@router.get("/users/me", tags=["users"], response_model=UserModel)
async def read_user_me() -> UserDict:
    return {"username": "fakecurrentuser"}


@router.get("/users/{username}", tags=["users"], response_model=UserModel)
async def read_user(username: str) -> UserDict:
    return {"username": username}
