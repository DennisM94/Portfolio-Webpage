# Portfolio Website (Angular + FastAPI)

A modern, professional portfolio to showcase skills and projects. It includes a multilingual frontend, clickable project cards with detail pages, and a Wikipedia article analyzer with rich filtering and charts.

## Tech Stack
- Frontend: Angular (SCSS, Angular Material)
- Backend: FastAPI (Python)
- Data: Static JSON in API for profile, skills, and projects

## Features
- Multilingual UI (EN, DE, FR, ES) with a simple language switcher
- Custom blue “D” SVG logo integrated across the site
- Projects overview with clickable cards and detail routes (`/projects/:id`)
- Wikipedia Analyzer:
	- Paste a Wikipedia URL (EN/DE supported) and analyze word frequencies
	- Auto-detected stop words (English/German) toggle
	- Exclude words manually via checkbox list; excluded words appear as removable chips
	- Slider and number input to choose how many top words to display (1–100)
	- Bar/pie chart toggle with dynamic colors and updated titles
- Clean, modular backend (routers/services/app factory)

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
# In project root (PowerShell)
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
- POST `/api/merge-pdfs` - merge multiple uploaded PDFs and return a single PDF
	- Request: `multipart/form-data` with one or more `files` fields (PDFs only)
	- Response: `application/pdf` with `Content-Disposition: attachment; filename=merged.pdf`

## Frontend: Angular

### Install & run (dev)
```bash
# In frontend/
npm install
npm start
# App at http://localhost:4200
```

### Optional: SSR preview (Node/Express)
```bash
# In frontend/
npm run build
npm run serve:ssr:frontend
# SSR server at http://localhost:4000
```

## Connect Frontend to Backend
- Ensure backend runs at `http://127.0.0.1:8000` (CORS enabled for `http://localhost:4200`).
- Frontend calls are configured in `frontend/src/app/services/api.service.ts` via `baseUrl`.
- Endpoints used: `/api/profile`, `/api/skills`, `/api/projects`, `/api/scrape-wikipedia`.

## Architecture
```
backend/
	app/
		core/app.py            # FastAPI app factory + CORS + router wiring
		api/routers/*.py       # profile, skills, projects, wikipedia, health
		services/
			wiki_scraper.py      # scraping + text processing
			constants.py         # stop-word sets (EN/DE + technical)
frontend/
	src/app/
		pages/                 # landing, about, projects, project-detail
		services/              # api + language services
```

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

## Troubleshooting
- PowerShell blocked `npx`: prefix with `cmd /c` or use Command Prompt.
- CORS errors: confirm backend runs at `127.0.0.1:8000` and CORS allows `http://localhost:4200`.
- Wikipedia 403 errors: backend sends browser-like headers; ensure the URL is a full Wikipedia article link.

---

See the `frontend/README.md` for frontend-specific details and workflows.


