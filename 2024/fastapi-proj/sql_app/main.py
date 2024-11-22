# sql_app/main.py
from contextlib import asynccontextmanager
from typing import AsyncGenerator, Generator

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import cruds
from .database import SessionLocal, engine
from .models import Base, Item, User
from .schemas import ItemCreate, ItemSchema, UserCreate, UserSchema


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncGenerator[None, None]:
    Base.metadata.create_all(engine)
    yield
    Base.metadata.drop_all(engine)
    engine.dispose()


app = FastAPI(lifespan=lifespan)


# Dependency
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/users/", response_model=UserSchema)
def create_user(user: UserCreate, db: Session = Depends(get_db)) -> User:
    db_user = cruds.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    result = cruds.create_user(db, user)
    return result


@app.get("/users/", response_model=list[UserSchema])
def read_users(
    skip: int = 0, limit: int = 100, db: Session = Depends(get_db)
) -> list[User]:
    users = cruds.get_users(db, skip, limit)
    return users


@app.get("/users/{user_id}", response_model=UserSchema)
def read_user(user_id: int, db: Session = Depends(get_db)) -> User:
    db_user = cruds.get_user(db, user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/items/", response_model=ItemSchema)
def create_item_for_user(
    user_id: int, item: ItemCreate, db: Session = Depends(get_db)
) -> Item:
    result = cruds.create_user_item(db, item, user_id)
    return result


@app.get("/items/", response_model=list[ItemSchema])
def read_items(
    skip: int = 0, limit: int = 100, db: Session = Depends(get_db)
) -> list[Item]:
    items = cruds.get_items(db, skip, limit)
    return items
