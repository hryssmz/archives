from typing import TypedDict

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class AdminModel(BaseModel):
    message: str


class AdminDict(TypedDict):
    message: str


@router.post("/", response_model=AdminModel)
async def update_admin() -> AdminDict:
    return {"message": "Admin getting schwifty"}
