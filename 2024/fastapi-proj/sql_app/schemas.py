# sql_app/schemas.py
from typing import Optional

from pydantic import BaseModel, ConfigDict


class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None


class ItemCreate(ItemBase):
    pass


class ItemSchema(ItemBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    owner_id: int


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class UserSchema(UserBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    is_active: bool
    items: list[ItemSchema] = []
