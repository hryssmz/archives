# sql_app/cruds.py
from typing import Optional

from sqlalchemy.orm import Session

from .models import Item, User
from .schemas import ItemCreate, UserCreate


def get_user(db: Session, user_id: int) -> Optional[User]:
    result = db.query(User).filter(User.id == user_id).first()
    return result


def get_user_by_email(db: Session, email: str) -> Optional[User]:
    result = db.query(User).filter(User.email == email).first()
    return result


def get_users(db: Session, skip: int = 0, limit: int = 100) -> list[User]:
    result = db.query(User).offset(skip).limit(limit).all()
    return result


def create_user(db: Session, user: UserCreate) -> User:
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_items(db: Session, skip: int = 0, limit: int = 100) -> list[Item]:
    result = db.query(Item).offset(skip).limit(limit).all()
    return result


def create_user_item(db: Session, item: ItemCreate, user_id: int) -> Item:
    db_item = Item(
        title=item.title, description=item.description, owner_id=user_id
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
