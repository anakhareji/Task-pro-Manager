from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from models import Base

from routers import auth, admin, student, supervisor  # ✅ import all routers

app = FastAPI(title="Task Pro Manager API")

# ✅ CORS (Required for React → FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],                      # GET, POST, PUT, DELETE, OPTIONS
    allow_headers=["*"],
)

# ✅ Create DB tables
Base.metadata.create_all(bind=engine)

# ✅ REGISTER ROUTERS
app.include_router(auth.router)        # /register, /login
app.include_router(admin.router)       # /admin/*
app.include_router(supervisor.router)  # /supervisor/*
app.include_router(student.router)     # /student/*

# ✅ Root check
@app.get("/")
def root():
    return {"message": "Task Pro Manager Backend is running"}
