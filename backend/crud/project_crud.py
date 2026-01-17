from sqlalchemy.orm import Session
from models import Project, Task   # 👈 ADD Task import


def create_project(db: Session, project):
    db_project = Project(
        project_name=project.project_name,
        created_by=project.created_by
    )
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


def get_projects(db: Session):
    return db.query(Project).all()


def update_project(db: Session, project_id: int, data):
    project = db.query(Project).filter(Project.project_id == project_id).first()
    if not project:
        return None

    for key, value in data.dict(exclude_unset=True).items():
        setattr(project, key, value)

    db.commit()
    db.refresh(project)
    return project


def delete_project(db: Session, project_id: int):
    project = db.query(Project).filter(Project.project_id == project_id).first()
    if not project:
        return None
    db.delete(project)
    db.commit()
    return {"message": "Project deleted"}


# ✅ ADD THIS FUNCTION (REQUIRED FOR STUDENT DASHBOARD)
def get_projects_by_student(db: Session, student_id: int):
    return (
        db.query(Project)
        .join(Task, Task.project_id == Project.project_id)
        .filter(Task.assigned_to == student_id)
        .all()
    )
