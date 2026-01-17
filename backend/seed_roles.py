from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Role, Base

# Ensure tables exist
Base.metadata.create_all(bind=engine)

def seed_roles():
    db = SessionLocal()
    try:
        # Check if roles already exist
        if db.query(Role).first():
            print("Roles already seeded!")
            return

        print("Seeding roles...")
        roles = [
            Role(role_id=1, role_name="Admin"),
            Role(role_id=2, role_name="Supervisor"),
            Role(role_id=3, role_name="Student"),
        ]
        db.add_all(roles)
        db.commit()
        print("Roles seeded successfully!")

    except Exception as e:
        print(f"Error seeding roles: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_roles()
