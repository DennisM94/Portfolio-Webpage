# Portfolio Website (Angular + FastAPI)

A modern, professional portfolio to showcase skills and projects.

## Tech Stack
- Frontend: Angular (SCSS, Angular Material)
- Backend: FastAPI (Python)
- Data: Static JSON in API for profile, skills, and projects

## Prerequisites
- Windows 10/11
- Python 3.11 (installed via winget)
- Node.js LTS (v18+ or v20+ recommended)

## Backend: FastAPI

### Setup
```bash
# In project root
py -3.11 -m venv venv
./venv/Scripts/python -m pip install --upgrade pip
./venv/Scripts/python -m pip install fastapi "uvicorn[standard]"
```

### Run (dev)
```bash
# In project root
./venv/Scripts/python -m uvicorn backend.app.main:app --reload
# API at http://127.0.0.1:8000
```

### API Endpoints
- GET `/api/health` - service status
- GET `/api/profile` - name, title, about, links
- GET `/api/skills` - categorized skills
- GET `/api/projects` - latest projects (blog-style list)

## Frontend: Angular

### Scaffold
```bash
# In project root (PowerShell may block npx; use cmd):
cmd /c "npx --yes @angular/cli@18 new frontend --style=scss --routing --skip-git --strict --package-manager npm"
cd frontend
npm install
```

### Recommended UI
```bash
# Add Angular Material (choose Indigo/Pink, global typography, animations)
ng add @angular/material --defaults --skip-confirmation
```

### Pages to create
- `Landing` - hero with title, key skills bullets, CTA link to About
- `About` - detailed bio, experience highlights
- `Projects` - blog-style cards with GitHub links (fetched from API)

### Dev Run
```bash
# In backend/
uvicorn backend.app.main:app --reload
# In frontend/
npm start
# App at http://localhost:4200
```

## Connect Frontend to Backend
- Ensure backend runs at `http://127.0.0.1:8000` (CORS enabled for `http://localhost:4200`)
- Create an Angular service to call `/api/profile`, `/api/skills`, `/api/projects`

## Next Steps
- Dockerize frontend + backend

## Notes
- If PowerShell blocks `npx`, prefix with `cmd /c` or run in Command Prompt.

## Docker

### Build & Run with Docker Compose
```bash
docker compose up --build
# Frontend: http://localhost:8080
# Backend:  http://localhost:8000
```

### Images
- Backend: defined in `backend/Dockerfile` (Python 3.11 + Uvicorn)
- Frontend: `frontend/Dockerfile` builds Angular and serves via NGINX


