import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'en' | 'de' | 'fr' | 'es';

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
  };
  landing: {
    aboutMe: string;
    viewProjects: string;
    skills: string;
    jobExperience: string;
  };
  about: {
    aboutMe: string;
    more: string;
    projects: string;
  };
  projects: {
    projects: string;
    loading: string;
    liveDemos?: string;
    repositories?: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
    },
    landing: {
      aboutMe: 'About me',
      viewProjects: 'View projects',
      skills: 'Skills',
      jobExperience: 'Job Experience',
    },
    about: {
      aboutMe: 'About Me',
      more: 'More',
      projects: 'Projects',
    },
    projects: {
      projects: 'Projects',
      loading: 'Loading...',
      liveDemos: 'Live Demos',
      repositories: 'Code Repositories',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      projects: 'Projekte',
    },
    landing: {
      aboutMe: 'Über mich',
      viewProjects: 'Projekte ansehen',
      skills: 'Fähigkeiten',
      jobExperience: 'Berufserfahrung',
    },
    about: {
      aboutMe: 'Über mich',
      more: 'Mehr',
      projects: 'Projekte',
    },
    projects: {
      projects: 'Projekte',
      loading: 'Lädt...',
      liveDemos: 'Live-Demos',
      repositories: 'Code-Repositories',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
    },
    landing: {
      aboutMe: 'À propos de moi',
      viewProjects: 'Voir les projets',
      skills: 'Compétences',
      jobExperience: 'Expérience professionnelle',
    },
    about: {
      aboutMe: 'À propos de moi',
      more: 'Plus',
      projects: 'Projets',
    },
    projects: {
      projects: 'Projets',
      loading: 'Chargement...',
      liveDemos: 'Démos en direct',
      repositories: 'Dépôts de code',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      projects: 'Proyectos',
    },
    landing: {
      aboutMe: 'Sobre mí',
      viewProjects: 'Ver proyectos',
      skills: 'Habilidades',
      jobExperience: 'Experiencia laboral',
    },
    about: {
      aboutMe: 'Sobre mí',
      more: 'Más',
      projects: 'Proyectos',
    },
    projects: {
      projects: 'Proyectos',
      loading: 'Cargando...',
      liveDemos: 'Demos en vivo',
      repositories: 'Repositorios de código',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private currentLanguage = signal<Language>('en');
  
  get language() {
    return this.currentLanguage();
  }

  get translations(): Translations {
    return translations[this.currentLanguage()];
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    if (this.isBrowser) {
      localStorage.setItem('preferred-language', lang);
    }
  }

  toggleLanguage() {
    const newLang: Language = this.currentLanguage() === 'en' ? 'de' : 'en';
    this.setLanguage(newLang);
  }

  getLanguageLabel(lang: Language): string {
    const labels: Record<Language, string> = {
      en: 'EN',
      de: 'DE',
      fr: 'FR',
      es: 'ES',
    };
    return labels[lang];
  }

  constructor() {
    if (this.isBrowser) {
      const stored = localStorage.getItem('preferred-language') as Language;
      if (stored === 'en' || stored === 'de' || stored === 'fr' || stored === 'es') {
        this.currentLanguage.set(stored);
      }
    }
  }
}
