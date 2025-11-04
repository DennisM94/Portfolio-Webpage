import { Component, inject } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { ApiService, Project } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  template: `
    <section class="container section">
      <h2 style="margin:0 0 16px;">{{ t.projects.projects }}</h2>
      <div class="grid">
        <article class="card card--pad project-card" *ngFor="let p of projects">
          <div class="project-content">
            <h3 style="margin:0 0 6px;">{{ p.title }}</h3>
            <p class="meta">{{ p.date | date:'mediumDate' }} · {{ p.tags.join(', ') }}</p>
            <p>{{ p.summary }}</p>
          </div>
          <div class="project-actions">
            <a *ngIf="p.githubUrl" class="project-button" [href]="p.githubUrl" target="_blank" rel="noopener">
              <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
    .meta { color: var(--muted); font-size: 0.9rem; margin: 0 0 8px; }
    .project-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .project-content {
      flex: 1;
    }
    .project-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    }
    .project-button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 6px;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.2s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.05);
      color: var(--text);
    }
    .project-button:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
      border-color: rgba(255, 255, 255, 0.3);
    }
    .button-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
    `,
  ],
})
export class ProjectsComponent {
  private readonly api = inject(ApiService);
  private readonly languageService = inject(LanguageService);
  
  projects: Project[] = [];

  get t() {
    return this.languageService.translations;
  }

  constructor() {
    this.api.getProjects().subscribe((data) => (this.projects = data));
  }
}


