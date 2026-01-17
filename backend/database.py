from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import os
from dotenv import load_dotenv

load_dotenv()

SERVER = os.getenv("DB_SERVER", "localhost\\SQLEXPRESS")
DATABASE = os.getenv("DB_NAME", "TaskProManagerDB")

DATABASE_URL = (
    f"mssql+pyodbc://@{SERVER}/{DATABASE}"
    # "?driver=ODBC+Driver+17+for+SQL+Server"
    "?driver=ODBC+Driver+17+for+SQL+Server&TrustServerCertificate=yes"
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
