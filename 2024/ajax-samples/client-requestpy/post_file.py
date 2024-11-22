# post_file.py
import json
from pathlib import Path

import requests

host = "http://localhost:13002"
file_name = "sample.txt"
file_path = Path(__file__).parent / file_name
data = {
    "username": "John Doe",
    "gender": "male",
}

with open(file_path, "r") as fp:
    files = {"text_file": (file_name, fp, "text/plain")}
    res = requests.post(f"{host}/file/", data=data, files=files)
    res_body = json.loads(res.text)
    print(res_body["text_content"])
