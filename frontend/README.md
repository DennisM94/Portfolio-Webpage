# Frontend (Angular)

The Angular app for the portfolio site. It provides a multilingual UI, clickable project details, and a Wikipedia analyzer with rich filtering and charts.

## Features
- Multilingual UI (EN, DE, FR, ES) with a simple language dropdown
- Custom blue “D” SVG logo used in the header and other places
- Routing with pages: Landing, About, Projects, Project Detail (`/projects/:id`)
- Wikipedia Analyzer:
	- Paste a Wikipedia URL (en/de) and analyze word frequencies
	- Stop words toggle (auto-detects language from the URL)
	- Exclude words via searchable checkbox list; excluded words appear as removable chips
	- Slider and number input to choose 1–100 top words to display
	- Bar/pie chart toggle with dynamic colors and updated titles

## Prerequisites
- Node.js LTS (v18+ or v20+ recommended)
- Backend running at `http://127.0.0.1:8000` (default)

If you need a different API base URL, edit `src/app/services/api.service.ts` and change `baseUrl`.

## Install & run (development)
```bash
npm install
npm start
# App runs at http://localhost:4200
```

## SSR (optional preview)
This project includes Angular SSR (Node/Express) for previewing a server-rendered build.
```bash
npm run build
npm run serve:ssr:frontend
# SSR server at http://localhost:4000
```

## Project structure (selected)
```
src/
	app/
		pages/
			landing.component.ts
			about.component.ts
			projects.component.ts
			project-detail.component.ts
		services/
			api.service.ts        # REST client targeting FastAPI backend
			language.service.ts   # i18n state handling
	styles.scss
	main.ts
```

## Wikipedia analyzer usage
1) Paste a full Wikipedia article URL (EN or DE).
2) Optionally toggle “Filter Stop Words (Auto-detect language)”.
3) Use the “Exclude Words” list to remove additional words; removed words appear as chips below the controls and can be undone with the “X”.
4) Choose how many words to display via the slider or number input.
5) Toggle between bar and pie chart.

Notes:
- When you analyze a new page, previously excluded words are cleared automatically.
- Re-analyzing the same page keeps your excluded words and filters.

## Troubleshooting
- CORS: Ensure the backend allows `http://localhost:4200` and runs at `http://127.0.0.1:8000`.
- API not reachable: Confirm the `baseUrl` in `api.service.ts`.
- Chart not rendering: Make sure data was returned by the backend for the provided URL.

---

For backend details and API endpoints, see the project root `README.md`.
