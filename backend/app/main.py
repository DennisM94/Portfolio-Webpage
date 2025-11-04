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
                "As a Software Engineer, I possess solid experience in Python, Java (Quarkus), C#/.NET, and Angular. "
                "I'm comfortable across data and platform tooling including PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau, and Denodo. "
                "I am highly team-oriented, valuing collaboration and actively supporting my colleagues with technical challenges. "
                "My area of interest is broad but centers heavily on technology—particularly Cybersecurity and Artificial Intelligence (AI). "
                "In my free time, I enjoy relaxing activities like bouldering, cycling, and gaming."
            ),
            "de": (
                "Als Software Engineer bringe ich fundierte Erfahrung in Python, Java (Quarkus), C#/.NET und Angular mit. "
                "Ich bin vertraut mit modernen Daten- und Plattform-Tools wie PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau und Denodo. "
                "Meine Arbeitsweise ist stark teamorientiert; ich lege Wert auf Zusammenarbeit und unterstütze meine Kolleginnen und Kollegen gerne aktiv bei Herausforderungen. "
                "Mein Interessensgebiet ist breit gefächert, konzentriert sich jedoch stark auf Technologie – insbesondere Cybersecurity und Künstliche Intelligenz (KI). "
                "In meiner Freizeit schalte ich beim Bouldern, Radfahren oder bei Videospielen ab."
            ),
            "fr": (
                "En tant qu'Ingénieur Logiciel, je possède une solide expérience en Python, Java (Quarkus), C#/.NET et Angular. "
                "Je suis à l'aise avec les outils de données et de plateforme modernes, notamment PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau et Denodo. "
                "J'ai une approche de travail fortement orientée vers l'équipe, valorisant la collaboration et aidant activement mes collègues. "
                "Mes domaines d'intérêt sont variés, mais se concentrent fortement sur la technologie – en particulier la Cybersécurité et l'Intelligence Artificielle (IA). "
                "Pendant mon temps libre, j'aime me détendre en faisant du bloc (escalade), du vélo et en jouant à des jeux vidéo."
            ),
            "es": (
                "Como Ingeniero de Software, tengo una sólida experiencia en Python, Java (Quarkus), C#/.NET y Angular. "
                "Me siento cómodo con herramientas de datos y plataformas modernas, incluyendo PostgreSQL, Kubernetes (Rancher + Harbor), Docker, Tableau y Denodo. "
                "Mi estilo de trabajo está muy orientado al equipo; valoro la colaboración y me gusta ayudar activamente a mis compañeros con los desafíos. "
                "Mi área de interés es amplia, pero se centra fuertemente en la tecnología, especialmente la Ciberseguridad y la Inteligencia Artificial (IA). "
                "En mi tiempo libre, disfruto de actividades como el búlder (escalada), el ciclismo y los videojuegos."
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
            "title": "Portfolio-Webpage",
            "date": "2025-11-04",
            "summary": "A Website serving as a central Hub for all my projects, blog posts and other fun stuff.",
            "tags": ["TypeScript", "Angular", "Python", "FastAPI"],
            "githubUrl": "https://github.com/DennisM94/portfolio-webpage",
            "liveUrl": "https://dennism94.github.io/portfolio-webpage",
        },
        {
            "id": "proj-002",
            "title": "RedditScraping",
            "date": "2024-04-10",
            "summary": "A Reddit Scraping bot that also analyzes and displays data with matplotlib.",
            "tags": ["Python", "Reddit API", "Matplotlib"],
            "githubUrl": "https://github.com/DennisM94/RedditScraping",
        },
        {
            "id": "proj-003",
            "title": "3-D_Simulation",
            "date": "2023-10-06",
            "summary": "An Engine for simulation Objects in 3-D Space.",
            "tags": ["Python", "3D", "Simulation"],
            "githubUrl": "https://github.com/DennisM94/3-d_Simulation",
        },
        {
            "id": "proj-004",
            "title": "AnotherTechblog",
            "date": "2023-04-26",
            "summary": "This is an attempt at a blogging Page in C#.",
            "tags": ["C#", "Blog", "Web"],
            "githubUrl": "https://github.com/DennisM94/AnotherTechblog",
        },
        {
            "id": "proj-005",
            "title": "WikiScrapping",
            "date": "2023-04-11",
            "summary": "A Webscraping script to extract data from Wikipedia and display it in different graphs.",
            "tags": ["Python", "Web Scraping"],
            "githubUrl": "https://github.com/DennisM94/wikiscrapping",
        },
        {
            "id": "proj-006",
            "title": "SpaceInvaders-in-Python",
            "date": "2023-01-20",
            "summary": "A Space Invaders clone written in Python using Pygame.",
            "tags": ["Python", "Game", "PyGame"],
            "githubUrl": "https://github.com/DennisM94/spaceinvaders-in-python",
        },
        {
            "id": "proj-007",
            "title": "TicTacToe",
            "date": "2022-11-07",
            "summary": "A very simple TicTacToe program to play the game in the Commandline.",
            "tags": ["Python", "Game", "CLI"],
            "githubUrl": "https://github.com/DennisM94/tictactoe",
        },
        {
            "id": "proj-008",
            "title": "PDF-Merger",
            "date": "2022-11-07",
            "summary": "A PDF-Merger that merges all PDF-Files from /PDF into one .pdf.",
            "tags": ["Python", "PDF", "Utility"],
            "githubUrl": "https://github.com/DennisM94/PDF-Merger",
        },
        {
            "id": "proj-009",
            "title": "ProcessMonitor",
            "date": "2022-11-07",
            "summary": "A Process Monitor that displays active processes on a Windows machine. Inspired by a tutorial by David Bombal.",
            "tags": ["Python", "Windows", "System"],
            "githubUrl": "https://github.com/DennisM94/ProcessMonitor",
        },
        {
            "id": "proj-010",
            "title": "PortScanner",
            "date": "2022-11-07",
            "summary": "A simple Portscanner using nmap. It scans ports 1-45000 of a given page and reports open Ports. Inspired by David Bombals Tutorial.",
            "tags": ["Python", "Security", "Networking"],
            "githubUrl": "https://github.com/DennisM94/PortScanner",
        },
        {
            "id": "proj-011",
            "title": "DigitRecognition",
            "date": "2022-11-07",
            "summary": "A Digit Recognition Program written in Python using the keras module. It recognises handwritten Digits from a 64x64 .png and outputs the calculated number.",
            "tags": ["Python", "Machine Learning", "Keras"],
            "githubUrl": "https://github.com/DennisM94/digit-recognition",
        },
    ]


@app.get("/api/health")
def health() -> Dict[str, str]:
    return {"status": "ok"}


# For `uvicorn backend.app.main:app --reload`
def get_app() -> FastAPI:
    return app


