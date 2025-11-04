import { Component, inject } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { ApiService, Project } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, DatePipe],
  template: `
    <section class="container section">
      <h2 style="margin:0 0 16px;">{{ t.projects.projects }}</h2>
      <div class="grid">
        <article class="card card--pad" *ngFor="let p of projects">
          <h3 style="margin:0 0 6px;">{{ p.title }}</h3>
          <p class="meta">{{ p.date | date:'mediumDate' }} · {{ p.tags.join(', ') }}</p>
          <p>{{ p.summary }}</p>
          <div style="margin-top:12px;">
            <a *ngIf="p.githubUrl" class="button button--ghost" [href]="p.githubUrl" target="_blank" rel="noopener">GitHub</a>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
    .meta { color: var(--muted); font-size: 0.9rem; margin: 0 0 8px; }
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


