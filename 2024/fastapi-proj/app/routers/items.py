from typing import TypedDict

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from ..dependencies import get_token_header

router = APIRouter(
    prefix="/items",
    tags=["items"],
    dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)


class ItemBaseModel(BaseModel):
    name: str


class ItemModel(ItemBaseModel):
    item_id: str


class ItemBaseDict(TypedDict):
    name: str


class ItemDict(ItemBaseDict):
    item_id: str


fake_items_db: dict[str, ItemBaseDict] = {
    "plumbus": {"name": "Plumbus"},
    "gun": {"name": "Portal Gun"},
}


@router.get("/", response_model=dict[str, ItemBaseModel])
async def read_items() -> dict[str, ItemBaseDict]:
    return fake_items_db


@router.get("/{item_id}", response_model=ItemModel)
async def read_item(item_id: str) -> ItemDict:
    if item_id not in fake_items_db:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"name": fake_items_db[item_id]["name"], "item_id": item_id}


@router.put(
    "/{item_id}",
    tags=["custom"],
    responses={403: {"description": "Operation forbidden"}},
    response_model=ItemModel,
)
async def update_item(item_id: str) -> ItemDict:
    if item_id != "plumbus":
        raise HTTPException(
            status_code=403, detail="You can only update the item: plumbus"
        )
    return {"item_id": item_id, "name": "The great Plumbus"}
