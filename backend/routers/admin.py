from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import (
    UserCreate, UserUpdate,
    ProjectCreate,
    TaskCreate
)
from crud.user_crud import *
from crud.project_crud import *
from crud.task_crud import *

router = APIRouter(prefix="/admin", tags=["Admin"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---------- USERS ----------

@router.post("/users")
def admin_create_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)


@router.get("/users")
def admin_get_users(db: Session = Depends(get_db)):
    return get_users(db)


@router.put("/users/{user_id}")
def admin_update_user(user_id: int, data: UserUpdate, db: Session = Depends(get_db)):
    user = update_user(db, user_id, data)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.delete("/users/{user_id}")
def admin_delete_user(user_id: int, db: Session = Depends(get_db)):
    return delete_user(db, user_id)

# ---------- PROJECTS ----------

@router.post("/projects")
def admin_create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    return create_project(db, project)


@router.get("/projects")
def admin_get_projects(db: Session = Depends(get_db)):
    return get_projects(db)

# ---------- TASKS ----------

@router.post("/tasks")
def admin_create_task(task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db, task)


@router.get("/tasks")
def admin_get_tasks(db: Session = Depends(get_db)):
    return get_tasks(db)
