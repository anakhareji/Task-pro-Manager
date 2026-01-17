from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import SubmissionCreate
from crud.submission_crud import create_submission
from crud.task_crud import get_tasks_by_student
from crud.project_crud import get_projects_by_student

router = APIRouter(prefix="/student", tags=["Student"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# -------- SUBMISSIONS --------

@router.post("/submissions")
def submit_work(submission: SubmissionCreate, db: Session = Depends(get_db)):
    return create_submission(db, submission)


# -------- STUDENT TASKS --------

@router.get("/tasks/{student_id}")
def my_tasks(student_id: int, db: Session = Depends(get_db)):
    return get_tasks_by_student(db, student_id)


# -------- STUDENT PROJECTS --------

@router.get("/projects/{student_id}")
def my_projects(student_id: int, db: Session = Depends(get_db)):
    return get_projects_by_student(db, student_id)
