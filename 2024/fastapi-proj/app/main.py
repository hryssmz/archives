from functools import lru_cache
from typing import Annotated, Any

from fastapi import Depends, FastAPI

from .config import Settings

app = FastAPI()


@lru_cache
def get_settings() -> Settings:
    return Settings()


@app.get("/info")
async def info(
    settings: Annotated[Settings, Depends(get_settings)]
) -> dict[str, Any]:
    return {
        "app_name": settings.app_name,
        "admin_email": settings.admin_email,
        "items_per_user": settings.items_per_user,
    }
