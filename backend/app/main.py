from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any


app = FastAPI(title="Portfolio API", version="0.1.0")

# CORS for Angular dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://127.0.0.1:4200",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/profile")
def get_profile() -> Dict[str, Any]:
    return {
        "name": "Dennis",
        "title": {
            "en": "Data Scientist/ Software Engineer",
            "de": "Data Scientist/ Software-Ingenieur",
            "fr": "Data Scientist/ Ingénieur logiciel",
            "es": "Científico de datos/ Ingeniero de software"
        },
        "location": "Munich, Germany",
        "about": {
            "en": (
                "Software Engineer experienced in Python, Java (Quarkus), C#/.NET, and Angular. "
                "Comfortable across data and platform tooling including PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau, and Denodo."
            ),
            "de": (
                "Software Engineer mit Erfahrung in Python, Java (Quarkus), C#/.NET und Angular. "
                "Vertraut mit Daten- und Plattform-Tools wie PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau und Denodo."
            ),
            "fr": (
                "Software Engineer expérimenté en Python, Java (Quarkus), C#/.NET et Angular. "
                "À l'aise avec les outils de données et de plateforme, notamment PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau et Denodo."
            ),
            "es": (
                "Software Engineer con experiencia en Python, Java (Quarkus), C#/.NET y Angular. "
                "Cómodo con herramientas de datos y plataformas, incluidos PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau y Denodo."
            )
        },
        "links": {
            "github": "https://github.com/DennisM94",
            "linkedin": "https://www.linkedin.com/in/dennis-m%C3%BCnchehofe-18259a1b6/",
            "website": "http://localhost:4200/",
        },
    }


@app.get("/api/skills")
def get_skills() -> Dict[str, List[str]]:
    return {
        "languages_frameworks": [
            "Python",
            "Java",
            "Quarkus",
            "C#",
            ".NET",
            "Angular",
        ],
        "data_platform": [
            "SQL",
            "PostgreSQL",
            "Denodo",
            "Tableau",
        ],
        "devops": [
            "Docker",
            "Kubernetes",
            "Rancher",
            "Harbor",
        ],
    }


@app.get("/api/projects")
def get_projects() -> List[Dict[str, Any]]:
    return [
        {
            "id": "proj-001",
            "title": "Analytics Pipeline with Python & PostgreSQL",
            "date": "2025-09-01",
            "summary": "ETL pipeline with FastAPI ingestion and dashboarding via Tableau.",
            "tags": ["python", "fastapi", "postgresql", "tableau"],
            "githubUrl": "https://github.com/",
        },
        {
            "id": "proj-002",
            "title": "Quarkus Microservice on Kubernetes",
            "date": "2025-06-10",
            "summary": "High-performance Java service deployed via Rancher with images in Harbor.",
            "tags": ["java", "quarkus", "kubernetes", "rancher", "harbor"],
            "githubUrl": "https://github.com/",
        },
        {
            "id": "proj-003",
            "title": "Angular + .NET API Portfolio Site",
            "date": "2025-01-15",
            "summary": "Modern, responsive portfolio showcasing projects and skills.",
            "tags": ["angular", "csharp", ".net", "frontend"],
            "githubUrl": "https://github.com/",
        },
    ]


@app.get("/api/health")
def health() -> Dict[str, str]:
    return {"status": "ok"}


# For `uvicorn backend.app.main:app --reload`
def get_app() -> FastAPI:
    return app


