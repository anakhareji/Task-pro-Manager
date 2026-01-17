from sqlalchemy.orm import Session
from models import Task


def create_task(db: Session, task):
    db_task = Task(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


def get_tasks(db: Session):
    return db.query(Task).all()


def update_task(db: Session, task_id: int, data):
    task = db.query(Task).filter(Task.task_id == task_id).first()
    if not task:
        return None

    for key, value in data.dict(exclude_unset=True).items():
        setattr(task, key, value)

    db.commit()
    db.refresh(task)
    return task


def delete_task(db: Session, task_id: int):
    task = db.query(Task).filter(Task.task_id == task_id).first()
    if not task:
        return None
    db.delete(task)
    db.commit()
    return {"message": "Task deleted"}

def get_tasks_by_student(db:Session,student_id:int):
    return(
        db.query(Task)
        .filter(Task.assigned_to== student_id)
        .all()
    )
