from fastapi import FastAPI
from .core.app import create_app


# Create FastAPI application via factory
app: FastAPI = create_app()


# For `uvicorn backend.app.main:app --reload`
def get_app() -> FastAPI:
    return app


