from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class HelloWorld(BaseModel):
    foo: str


@app.get("/", response_model=HelloWorld)
async def hello_world() -> dict[str, str]:
    return {"message": "Hello World"}
