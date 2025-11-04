import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { ApiService, Profile } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, NgIf],
  template: `
    <section class="container section">
      <div class="card card--pad about-main">
        <h2 style="margin:0 0 8px;">{{ t.about.aboutMe }}</h2>
        <p class="subtitle">{{ getProfileTitle() }}</p>
        <p class="about-text">{{ getProfileAboutPart1() }}</p>
        <p class="about-text about-text--interests">{{ getProfileAboutPart2() }}</p>
        <div class="link-buttons">
          <a *ngIf="profile?.links?.github" class="link-button" [href]="profile?.links?.github" target="_blank" rel="noopener">
            <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a *ngIf="profile?.links?.linkedin" class="link-button" [href]="profile?.links?.linkedin" target="_blank" rel="noopener">
            <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a routerLink="/projects" class="link-button">
            <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            <span>{{ t.about.projects }}</span>
          </a>
        </div>
      </div>

      <div class="card card--pad more-section">
        <h3 style="margin:0 0 16px;">{{ t.about.more }}</h3>
        <div class="content-block">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus non lacus lobortis luctus. Vivamus efficitur, lorem sed consequat mattis, orci libero malesuada tortor, vitae facilisis nibh justo nec nisl. Sed sed ante id velit consectetur interdum. Nullam gravida libero in mi maximus, vitae tempus nisl facilisis.</p>
          <p>Praesent finibus, justo ac blandit pulvinar, arcu nunc bibendum ipsum, vitae condimentum sapien risus vitae nulla. Proin sit amet nibh nec nisl interdum congue. Sed ac ex ut elit dictum molestie. Integer at efficitur sem, in pharetra justo. Nulla facilisi. Proin venenatis felis magna, vitae auctor diam congue nec.</p>
        </div>
        
        <div class="content-block">
          <p>Curabitur suscipit, justo at ultrices feugiat, nisl nibh tempus quam, nec vulputate dolor purus et odio. Aliquam erat volutpat. Phasellus in tortor id lacus mattis tristique. Pellentesque nec molestie tortor. Donec iaculis, augue id auctor dictum, lorem risus vestibulum nibh, vitae ultricies nisl augue id mi.</p>
          <p>Donec vulputate, libero nec pulvinar pretium, enim purus tincidunt risus, et convallis leo lorem nec nisl. Vivamus venenatis arcu mauris, a rhoncus mi mattis sed. Duis elementum, ante ut venenatis viverra, mi urna varius odio, ac dictum massa justo a massa. Sed et imperdiet risus, in dictum nunc.</p>
        </div>
        
        <div class="content-block">
          <p>Sed dignissim lectus non nibh ultricies, at vehicula ante pretium. Donec egestas dolor arcu, quis finibus massa suscipit ac. Phasellus at bibendum massa. Cras congue, ante id iaculis mollis, justo neque eleifend velit, nec suscipit turpis magna non risus.</p>
          <p>Maecenas ut tortor in lorem dictum posuere. Nulla facilisi. Aenean convallis, tellus et tincidunt ullamcorper, nisl felis tempor odio, eget viverra velit nunc vel nibh. Donec non venenatis arcu, sit amet maximus massa. Integer id justo vitae arcu vehicula posuere. Vivamus pellentesque orci vel ante blandit, non suscipit risus lacinia.</p>
        </div>
        
        <div class="content-block">
          <p>Fusce vitae est at diam consequat volutpat. Integer pharetra efficitur elementum. Etiam vitae lorem gravida, suscipit erat et, dictum nunc. Pellentesque ut sem sit amet velit efficitur porta. Aenean a dolor id nisl rhoncus viverra ut eu arcu.</p>
          <p>Nullam semper faucibus volutpat. Sed commodo ut dui ac dignissim. Ut semper massa sagittis magna posuere, a viverra mi dapibus. Vivamus efficitur mauris sed arcu volutpat, non mattis est rutrum. In tincidunt, velit vitae faucibus placerat, justo ipsum efficitur odio, a commodo arcu justo in lacus.</p>
        </div>
        
        <div class="content-block">
          <p>Integer aliquam interdum nulla, non tempus lorem molestie sit amet. Aliquam pulvinar, nibh in bibendum varius, lorem leo efficitur est, id luctus turpis ligula sed lorem. Quisque luctus est non augue sollicitudin, vitae dignissim metus tempor. Cras id orci quis neque fermentum congue sit amet vitae ex.</p>
          <p>Morbi rhoncus metus at iaculis mollis. Donec sit amet purus eget felis suscipit consequat. Sed vitae hendrerit odio. Integer ut dolor vitae nunc rhoncus mollis. Vestibulum id scelerisque magna, vitae tempor lacus. In fermentum, eros eget viverra efficitur, neque odio volutpat tortor, a sodales turpis nisi eget turpis.</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .container { max-width: 840px; }
    
    .about-main {
      text-align: center;
    }
    
    .subtitle {
      color: var(--muted);
      margin: 0 0 20px;
      font-size: 1.1rem;
    }
    
    .about-text {
      color: var(--text);
      line-height: 1.7;
      margin: 0 0 24px;
      font-size: 1.05rem;
    }
    
    .about-text--interests {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .more-section {
      margin-top: 24px;
    }
    
    .content-block {
      margin-bottom: 24px;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    .content-block:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
    
    .content-block p {
      color: var(--text);
      line-height: 1.7;
      margin: 0;
      font-size: 1rem;
    }
    
    .content-block p + p {
      margin-top: 14px;
    }
    
    .link-buttons {
      display: flex;
      gap: 10px;
      margin-top: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .link-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      border: 1px solid var(--border);
      background: var(--primary);
      color: white;
      transition: transform 0.12s ease, background 0.2s ease;
    }
    
    .link-button:hover {
      background: var(--primary-600);
      transform: translateY(-1px);
    }
    
    .link-icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
    
    .link-icon--text {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 50%;
      background: white;
      color: var(--primary);
    }
    `,
  ],
})
export class AboutComponent {
  private readonly api = inject(ApiService);
  private readonly languageService = inject(LanguageService);
  
  profile?: Profile;

  get t() {
    return this.languageService.translations;
  }

  getProfileTitle(): string {
    if (!this.profile?.title) return '';
    if (typeof this.profile.title === 'string') return this.profile.title;
    return this.profile.title[this.languageService.language] || this.profile.title.en;
  }

  getProfileAbout(): string {
    if (!this.profile?.about) return '';
    if (typeof this.profile.about === 'string') return this.profile.about;
    return this.profile.about[this.languageService.language] || this.profile.about.en;
  }

  getProfileAboutPart1(): string {
    const fullText = this.getProfileAbout();
    const lang = this.languageService.language;
    
    // Split points for different languages
    const splitPoints: { [key: string]: string } = {
      'de': 'Mein Interessensgebiet',
      'en': 'My area of interest',
      'fr': 'Mes domaines d\'intérêt',
      'es': 'Mi área de interés'
    };
    
    const splitPoint = splitPoints[lang] || splitPoints['en'];
    const splitIndex = fullText.indexOf(splitPoint);
    
    if (splitIndex === -1) return fullText;
    return fullText.substring(0, splitIndex).trim();
  }

  getProfileAboutPart2(): string {
    const fullText = this.getProfileAbout();
    const lang = this.languageService.language;
    
    // Split points for different languages
    const splitPoints: { [key: string]: string } = {
      'de': 'Mein Interessensgebiet',
      'en': 'My area of interest',
      'fr': 'Mes domaines d\'intérêt',
      'es': 'Mi área de interés'
    };
    
    const splitPoint = splitPoints[lang] || splitPoints['en'];
    const splitIndex = fullText.indexOf(splitPoint);
    
    if (splitIndex === -1) return '';
    return fullText.substring(splitIndex).trim();
  }

  constructor() {
    this.api.getProfile().subscribe(p => this.profile = p);
  }
}


