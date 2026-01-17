import sys
try:
    from database import engine
    from sqlalchemy import text
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        print("Database connection successful:", result.fetchone())
except Exception as e:
    print(f"Database connection failed: {e}")
    sys.exit(1)
