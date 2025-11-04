import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService, Profile, SkillsResponse } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  template: `
    <section class="container hero hero-grid">
      <div class="hero-left">
        <h1 class="headline">
          <span class="hl-primary">{{ profile?.name || 'Dennis' }}</span>
          <span class="hl-sep"> — </span>
          <span class="hl-role">{{ getProfileTitle() }}</span>
        </h1>
        <p class="subtitle">Python · Java (Quarkus) · C#/.NET · Angular</p>
        <div class="hero-actions">
          <a routerLink="/about" class="button">{{ t.landing.aboutMe }}</a>
          <a routerLink="/projects" class="button button--ghost">{{ t.landing.viewProjects }}</a>
        </div>
      </div>
      <div class="hero-right">
        <img src="/profile.jpg" alt="Profile" class="avatar" />
      </div>
    </section>

    <section class="container section">
      <div class="card card--pad">
        <strong>{{ t.landing.skills }}</strong>
        <div class="chips">
          <span *ngFor="let s of (skills?.languages_frameworks || [])" class="chip">{{ s }}</span>
          <span *ngFor="let s of (skills?.data_platform || [])" class="chip">{{ s }}</span>
          <span *ngFor="let s of (skills?.devops || [])" class="chip">{{ s }}</span>
        </div>
      </div>
    </section>

    <section class="container section">
      <div class="card card--pad">
        <strong>{{ t.landing.jobExperience }}</strong>
        <div class="exp-list">
          <article *ngFor="let e of currentExperiences" class="exp">
            <div class="exp__header">
              <div class="exp__role">{{ e.role }}</div>
              <div class="exp__company">{{ e.company }}</div>
            </div>
            <div class="exp__meta">{{ e.period }} · {{ e.location }} · {{ e.mode }}</div>
            <ul class="exp__bullets">
              <li *ngFor="let b of e.highlights">{{ b }}</li>
            </ul>
            <div class="exp__tags">
              <span class="chip" *ngFor="let t of e.tags">{{ t }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .hero-grid { display:grid; grid-template-columns: 1fr auto; gap: 32px; align-items: center; padding-top: 56px; }
    .hero-left { text-align: left; }
    .headline { font-size: clamp(36px, 6vw, 72px); line-height: 1.05; margin: 0 0 8px; letter-spacing: -0.5px; font-weight: 800; }
    .hl-primary { background: linear-gradient(90deg, #60a5fa, #a5b4fc); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .hl-sep { color: var(--muted); opacity: .7; }
    .hl-sep { color: var(--muted); opacity: .7; }
    .hl-role { color: var(--muted); font-weight: 600; }
    .hero-actions { display:flex; gap: 10px; margin-top: 12px; }
    .hero-right { display:flex; justify-content: flex-end; }
    .avatar { width: 180px; height: 180px; border-radius: 999px; object-fit: cover; border: 3px solid var(--border); box-shadow: 0 6px 20px rgba(0,0,0,0.18); }
    .chips {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 8px;
      margin-top: 8px;
    }
    .chip { padding: 6px 10px; border-radius: 999px; border:1px solid var(--border); background: rgba(255,255,255,0.04); }
    .exp-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 28px;
      margin-top: 12px;
    }
    .exp {
      background: rgba(255,255,255,0.03);
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      border: 1px solid var(--border);
      padding: 18px 20px 14px 20px;
      transition: box-shadow 0.18s;
    }
    .exp:hover {
      box-shadow: 0 4px 24px rgba(0,0,0,0.13);
    }
    .exp__header { display:flex; gap:8px; align-items:baseline; }
    .exp__role { font-weight: 700; }
    .exp__company { color: var(--muted); }
    .exp__meta { color: var(--muted); font-size: .95rem; margin-top: 4px; }
    .exp__bullets { margin: 8px 0; padding-left: 18px; }
    .exp__bullets li { margin: 4px 0; }
    .exp__tags { display:flex; flex-wrap:wrap; gap:8px; }
    @media (max-width: 820px) {
      .hero-grid { grid-template-columns: 1fr; text-align: center; }
      .hero-left { text-align: center; }
      .hero-right { justify-content: center; }
      .avatar { width: 140px; height: 140px; }
    }
    `,
  ],
})
export class LandingComponent {
  private readonly api = inject(ApiService);
  private readonly languageService = inject(LanguageService);
  
  profile?: Profile;
  skills?: SkillsResponse;

  get t() {
    return this.languageService.translations;
  }

  getProfileTitle(): string {
    if (!this.profile?.title) return 'Software Engineer';
    if (typeof this.profile.title === 'string') return this.profile.title;
    return this.profile.title[this.languageService.language] || this.profile.title.en;
  }

  get currentExperiences() {
    const lang = this.languageService.language;
    if (lang === 'en') return this.experiencesEn;
    if (lang === 'de') return this.experiencesDe;
    if (lang === 'fr') return this.experiencesFr;
    return this.experiencesEs;
  }

  experiencesEn = [
    {
      role: 'Data Science/ Engineering (Working Student)',
      company: 'MTU Aero Engines',
      period: 'Apr. 2025 – Present',
      location: 'Munich, Bavaria, Germany',
      mode: 'Hybrid',
      highlights: [
        'Data Architects & Data Maintenance',
        'ETL processes, Testing and Tooling',
      ],
      tags: ['Python', 'Denodo', 'Tableau', 'PostgreSQL', 'Kubernetes', 'Rancher', 'Harbor', 'JIRA']
    },
    {
      role: 'Software Engineer (Working Student)',
      company: 'Capgemini',
      period: 'Nov. 2023 – Apr. 2025',
      location: 'Munich, Bavaria, Germany',
      mode: 'Hybrid',
      highlights: [
        'Cloud Custom Applications',
        'Python Automation (JIRA), Quarkus Services',
      ],
      tags: ['Java', 'Python', 'Quarkus', 'Angular', 'Docker', 'REST-API', 'PostgreSQL', 'SQL', 'JIRA']
    },
    {
      role: 'Software Engineer (Working Student)',
      company: 'Nuvotex Solutions GmbH & Co. KG',
      period: 'May 2022 – Nov. 2023',
      location: 'Augsburg, Bavaria, Germany',
      mode: 'Hybrid',
      highlights: [
        'API backend with .NET, Frontend with Angular',
      ],
      tags: ['C#', '.NET', 'ASP.NET Web API', 'Angular', 'Kubernetes', 'Docker', 'Azure', 'GitLab', 'TypeScript']
    },
    {
      role: 'Information System Administrator (Working Student)',
      company: 'MicroNova',
      period: 'May 2021 – Apr. 2022',
      location: 'Vierkirchen, Bavaria, Germany',
      mode: '',
      highlights: [
        'System administration and scripting',
      ],
      tags: ['Python', 'System Administration']
    },
  ];

  experiencesDe = [
    {
      role: 'Data Science/ Engineering (Werkstudent)',
      company: 'MTU Aero Engines',
      period: 'Apr. 2025 – Heute',
      location: 'München, Bayern, Deutschland',
      mode: 'Hybrid',
      highlights: [
        'Data Architects & Data Maintenance',
        'ETL-Prozesse, Testing und Tooling',
      ],
      tags: ['Python', 'Denodo', 'Tableau', 'PostgreSQL', 'Kubernetes', 'Rancher', 'Harbor', 'JIRA']
    },
    {
      role: 'Software Engineer (Werkstudent)',
      company: 'Capgemini',
      period: 'Nov. 2023 – Apr. 2025',
      location: 'München, Bayern, Deutschland',
      mode: 'Hybrid',
      highlights: [
        'Cloud Custom Applications',
        'Python-Automatisierung (JIRA), Quarkus Services',
      ],
      tags: ['Java', 'Python', 'Quarkus', 'Angular', 'Docker', 'REST-API', 'PostgreSQL', 'SQL', 'JIRA']
    },
    {
      role: 'Software Engineer (Werkstudent)',
      company: 'Nuvotex Solutions GmbH & Co. KG',
      period: 'Mai 2022 – Nov. 2023',
      location: 'Augsburg, Bayern, Deutschland',
      mode: 'Hybrid',
      highlights: [
        'API-Backend mit .NET, Frontend mit Angular',
      ],
      tags: ['C#', '.NET', 'ASP.NET Web API', 'Angular', 'Kubernetes', 'Docker', 'Azure', 'GitLab', 'TypeScript']
    },
    {
      role: 'Information System Administrator (Werkstudent)',
      company: 'MicroNova',
      period: 'Mai 2021 – Apr. 2022',
      location: 'Vierkirchen, Bayern, Deutschland',
      mode: '',
      highlights: [
        'Systemadministration und Scripting',
      ],
      tags: ['Python', 'System Administration']
    },
  ];

  experiencesFr = [
    {
      role: 'Data Science/ Ingénierie (Étudiant salarié)',
      company: 'MTU Aero Engines',
      period: 'Avr. 2025 – Présent',
      location: 'Munich, Bavière, Allemagne',
      mode: 'Hybride',
      highlights: [
        'Architectes de données et maintenance',
        'Processus ETL, tests et outillage',
      ],
      tags: ['Python', 'Denodo', 'Tableau', 'PostgreSQL', 'Kubernetes', 'Rancher', 'Harbor', 'JIRA']
    },
    {
      role: 'Ingénieur logiciel (Étudiant salarié)',
      company: 'Capgemini',
      period: 'Nov. 2023 – Avr. 2025',
      location: 'Munich, Bavière, Allemagne',
      mode: 'Hybride',
      highlights: [
        'Applications personnalisées cloud',
        'Automatisation Python (JIRA), Services Quarkus',
      ],
      tags: ['Java', 'Python', 'Quarkus', 'Angular', 'Docker', 'REST-API', 'PostgreSQL', 'SQL', 'JIRA']
    },
    {
      role: 'Ingénieur logiciel (Étudiant salarié)',
      company: 'Nuvotex Solutions GmbH & Co. KG',
      period: 'Mai 2022 – Nov. 2023',
      location: 'Augsbourg, Bavière, Allemagne',
      mode: 'Hybride',
      highlights: [
        'Backend API avec .NET, Frontend avec Angular',
      ],
      tags: ['C#', '.NET', 'ASP.NET Web API', 'Angular', 'Kubernetes', 'Docker', 'Azure', 'GitLab', 'TypeScript']
    },
    {
      role: 'Administrateur système informatique (Étudiant salarié)',
      company: 'MicroNova',
      period: 'Mai 2021 – Avr. 2022',
      location: 'Vierkirchen, Bavière, Allemagne',
      mode: '',
      highlights: [
        'Administration système et scripting',
      ],
      tags: ['Python', 'System Administration']
    },
  ];

  experiencesEs = [
    {
      role: 'Ciencia de datos/ Ingeniería (Estudiante trabajador)',
      company: 'MTU Aero Engines',
      period: 'Abr. 2025 – Presente',
      location: 'Múnich, Baviera, Alemania',
      mode: 'Híbrido',
      highlights: [
        'Arquitectos de datos y mantenimiento',
        'Procesos ETL, pruebas y herramientas',
      ],
      tags: ['Python', 'Denodo', 'Tableau', 'PostgreSQL', 'Kubernetes', 'Rancher', 'Harbor', 'JIRA']
    },
    {
      role: 'Ingeniero de software (Estudiante trabajador)',
      company: 'Capgemini',
      period: 'Nov. 2023 – Abr. 2025',
      location: 'Múnich, Baviera, Alemania',
      mode: 'Híbrido',
      highlights: [
        'Aplicaciones personalizadas en la nube',
        'Automatización Python (JIRA), Servicios Quarkus',
      ],
      tags: ['Java', 'Python', 'Quarkus', 'Angular', 'Docker', 'REST-API', 'PostgreSQL', 'SQL', 'JIRA']
    },
    {
      role: 'Ingeniero de software (Estudiante trabajador)',
      company: 'Nuvotex Solutions GmbH & Co. KG',
      period: 'Mayo 2022 – Nov. 2023',
      location: 'Augsburgo, Baviera, Alemania',
      mode: 'Híbrido',
      highlights: [
        'Backend API con .NET, Frontend con Angular',
      ],
      tags: ['C#', '.NET', 'ASP.NET Web API', 'Angular', 'Kubernetes', 'Docker', 'Azure', 'GitLab', 'TypeScript']
    },
    {
      role: 'Administrador de sistemas de información (Estudiante trabajador)',
      company: 'MicroNova',
      period: 'Mayo 2021 – Abr. 2022',
      location: 'Vierkirchen, Baviera, Alemania',
      mode: '',
      highlights: [
        'Administración de sistemas y scripting',
      ],
      tags: ['Python', 'System Administration']
    },
  ];

  constructor() {
    this.api.getProfile().subscribe(p => this.profile = p);
    this.api.getSkills().subscribe(s => this.skills = s);
  }
}


