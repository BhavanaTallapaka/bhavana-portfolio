from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from fastapi import FastAPI, Form
from fastapi.responses import RedirectResponse
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from starlette.status import HTTP_303_SEE_OTHER

app = FastAPI()

templates = Jinja2Templates(directory="app/templates")

# static files
app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


app = FastAPI()

import os

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("Bhavana Tallapaka"),
    MAIL_PASSWORD=os.getenv("kbqi cuuk daqx jydd"),
    MAIL_FROM=os.getenv("Bhavana Tallapaka"),
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False
)
@app.post("/send-email")
async def send_email(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    
    body = f"""
    Name: {name}
    Email: {email}

    Message:
    {message}
    """

    message = MessageSchema(
        subject="Portfolio Contact Message",
        recipients=["your_email@gmail.com"],
        body=body,
        subtype="plain"
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return RedirectResponse("/", status_code=HTTP_303_SEE_OTHER)