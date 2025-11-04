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
./venv/Scripts/python -m pip install -r requirements.txt
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
- POST `/api/scrape-wikipedia` - analyze a Wikipedia article and return top word frequencies
	- Request JSON:
		- `url` (string, required) - Wikipedia article URL
		- `filterStopWords` (boolean) - if true, auto-detected EN/DE stop words are filtered
		- `excludedWords` (string[], optional) - additional words to exclude
	- Response JSON (subset):
		- `words`: string[] - top up to 100 words
		- `counts`: number[] - matching counts for each word
		- `total_words`: number - total words after filtering
		- `unique_words`: number - number of unique words after filtering
		- `detected_language`: "english" | "german" | "unknown"

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
# Add Angular Material
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
# App at http://127.0.0.1:8000/api/
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


