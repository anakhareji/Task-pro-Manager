from models import Submission

def create_submission(db, submission):
    db_submission = Submission(
        task_id=submission.task_id,
        student_id=submission.student_id,
        content=submission.content
    )
    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)
    return db_submission

def get_submissions_by_student(db, student_id: int):
    return db.query(Submission).filter(
        Submission.student_id == student_id
    ).all()
