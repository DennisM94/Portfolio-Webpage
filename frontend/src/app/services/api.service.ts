import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profile {
  name: string;
  title: { en: string; de: string; fr: string; es: string } | string;
  location?: string;
  about: { en: string; de: string; fr: string; es: string } | string;
  links: { github?: string; linkedin?: string; website?: string };
}

export interface SkillsResponse {
  languages_frameworks: string[];
  data_platform: string[];
  devops: string[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  description?: string;
  techStack?: string[];
  features?: string[];
  howToUse?: string;
  screenshots?: string[];
  interactive?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://127.0.0.1:8000/api';

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/profile`);
  }

  getSkills(): Observable<SkillsResponse> {
    return this.http.get<SkillsResponse>(`${this.baseUrl}/skills`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
  }

  scrapeWikipedia(url: string, filterStopWords: boolean = true, excludedWords: string[] = []): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/scrape-wikipedia`, { 
      url, 
      filterStopWords, 
      excludedWords 
    });
  }

  mergePdfs(files: File[]): Observable<Blob> {
    const form = new FormData();
    files.forEach((f) => form.append('files', f, f.name));
    return this.http.post<Blob>(`${this.baseUrl}/merge-pdfs`, form, { responseType: 'blob' as 'json' });
  }
}
