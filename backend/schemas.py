from pydantic import BaseModel, EmailStr
from typing import Optional

# ================= USERS =================

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    role_id: int


# 🔑 ADD THIS RIGHT HERE (LOGIN SCHEMA)
class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    role_id: Optional[int] = None
    is_active: Optional[bool] = None


class UserOut(BaseModel):
    user_id: int
    name: str
    email: EmailStr
    role_id: int
    is_active: bool

    class Config:
        from_attributes = True   # ✅ Pydantic v2 fix


# ================= PROJECTS =================

class ProjectCreate(BaseModel):
    project_name: str
    created_by: int


class ProjectOut(BaseModel):
    project_id: int
    project_name: str

    class Config:
        from_attributes = True


# ================= TASKS =================

class TaskCreate(BaseModel):
    title: str
    description: Optional[str]
    priority: str
    status: str
    due_date: Optional[str]
    assigned_to: int
    project_id: int


class TaskOut(BaseModel):
    task_id: int
    title: str
    status: str
    priority: str

    class Config:
        from_attributes = True


# ================= SUBMISSIONS =================

class SubmissionCreate(BaseModel):
    task_id: int
    student_id: int
    content: str


class SubmissionUpdate(BaseModel):
    content: str
