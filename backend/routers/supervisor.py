from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import ProjectCreate, TaskCreate
from crud.project_crud import (
    create_project,
    get_projects
)
from crud.task_crud import (
    create_task,
    get_tasks
)

router = APIRouter(prefix="/supervisor", tags=["Supervisor"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# -------- PROJECTS --------

@router.post("/projects")
def create_project_api(project: ProjectCreate, db: Session = Depends(get_db)):
    return create_project(db, project)


@router.get("/projects")
def read_projects(db: Session = Depends(get_db)):
    return get_projects(db)


# -------- TASKS --------

@router.post("/tasks")
def create_task_api(task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db, task)


@router.get("/tasks")
def read_tasks(db: Session = Depends(get_db)):
    return get_tasks(db)
