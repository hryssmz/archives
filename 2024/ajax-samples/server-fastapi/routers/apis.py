# routers/apis.py
from fastapi import APIRouter, Body, File, UploadFile

router = APIRouter()


@router.post("/file/")
async def post_file(
    username: str = Body(...),
    gender: str = Body(...),
    text_file: UploadFile = File(...),
):
    text_content = text_file.file.read().decode("utf8")
    result = {
        "username": username.upper(),
        "gender": gender,
        "text_content": text_content,
    }
    return result
