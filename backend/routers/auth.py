from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import UserCreate
from crud.user_crud import create_user, get_user_by_email
from security import verify_password

router = APIRouter(tags=["Auth"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    if get_user_by_email(db, user.email):
        raise HTTPException(status_code=400, detail="Email already exists")
    return create_user(db, user)

@router.post("/login")
def login(data: dict, db: Session = Depends(get_db)):
    user = get_user_by_email(db, data.get("email"))

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not verify_password(data.get("password"), user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {
        "user_id": user.user_id,
        "name": user.name,
        "email": user.email,
        "role_id": user.role_id
    }
