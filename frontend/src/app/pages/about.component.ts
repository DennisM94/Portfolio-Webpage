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
      <div class="card card--pad">
        <h2 style="margin:0 0 8px;">{{ t.about.aboutMe }}</h2>
        <p style="color:var(--muted);margin:0 0 16px;">{{ getProfileTitle() }}</p>
        <p>{{ getProfileAbout() }}</p>
        <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;">
          <a *ngIf="profile?.links?.github" class="button" [href]="profile?.links?.github" target="_blank" rel="noopener">GitHub</a>
          <a *ngIf="profile?.links?.linkedin" class="button button--ghost" [href]="profile?.links?.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a *ngIf="profile?.links?.website" class="button button--ghost" [href]="profile?.links?.website" target="_blank" rel="noopener">Website</a>
          <a routerLink="/projects" class="button">{{ t.about.projects }}</a>
        </div>
      </div>

      <div class="card card--pad" style="margin-top:24px;">
        <h3 style="margin:0 0 12px;">{{ t.about.more }}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus non lacus lobortis luctus. Vivamus efficitur, lorem sed consequat mattis, orci libero malesuada tortor, vitae facilisis nibh justo nec nisl. Sed sed ante id velit consectetur interdum. Nullam gravida libero in mi maximus, vitae tempus nisl facilisis.</p>
        <p>Praesent finibus, justo ac blandit pulvinar, arcu nunc bibendum ipsum, vitae condimentum sapien risus vitae nulla. Proin sit amet nibh nec nisl interdum congue. Sed ac ex ut elit dictum molestie. Integer at efficitur sem, in pharetra justo. Nulla facilisi. Proin venenatis felis magna, vitae auctor diam congue nec.</p>
        <p>Curabitur suscipit, justo at ultrices feugiat, nisl nibh tempus quam, nec vulputate dolor purus et odio. Aliquam erat volutpat. Phasellus in tortor id lacus mattis tristique. Pellentesque nec molestie tortor. Donec iaculis, augue id auctor dictum, lorem risus vestibulum nibh, vitae ultricies nisl augue id mi.</p>
        <p>Donec vulputate, libero nec pulvinar pretium, enim purus tincidunt risus, et convallis leo lorem nec nisl. Vivamus venenatis arcu mauris, a rhoncus mi mattis sed. Duis elementum, ante ut venenatis viverra, mi urna varius odio, ac dictum massa justo a massa. Sed et imperdiet risus, in dictum nunc.</p>
        <p>Sed dignissim lectus non nibh ultricies, at vehicula ante pretium. Donec egestas dolor arcu, quis finibus massa suscipit ac. Phasellus at bibendum massa. Cras congue, ante id iaculis mollis, justo neque eleifend velit, nec suscipit turpis magna non risus.</p>
        <p>Maecenas ut tortor in lorem dictum posuere. Nulla facilisi. Aenean convallis, tellus et tincidunt ullamcorper, nisl felis tempor odio, eget viverra velit nunc vel nibh. Donec non venenatis arcu, sit amet maximus massa. Integer id justo vitae arcu vehicula posuere. Vivamus pellentesque orci vel ante blandit, non suscipit risus lacinia.</p>
        <p>Fusce vitae est at diam consequat volutpat. Integer pharetra efficitur elementum. Etiam vitae lorem gravida, suscipit erat et, dictum nunc. Pellentesque ut sem sit amet velit efficitur porta. Aenean a dolor id nisl rhoncus viverra ut eu arcu.</p>
        <p>Nullam semper faucibus volutpat. Sed commodo ut dui ac dignissim. Ut semper massa sagittis magna posuere, a viverra mi dapibus. Vivamus efficitur mauris sed arcu volutpat, non mattis est rutrum. In tincidunt, velit vitae faucibus placerat, justo ipsum efficitur odio, a commodo arcu justo in lacus.</p>
        <p>Integer aliquam interdum nulla, non tempus lorem molestie sit amet. Aliquam pulvinar, nibh in bibendum varius, lorem leo efficitur est, id luctus turpis ligula sed lorem. Quisque luctus est non augue sollicitudin, vitae dignissim metus tempor. Cras id orci quis neque fermentum congue sit amet vitae ex.</p>
        <p>Morbi rhoncus metus at iaculis mollis. Donec sit amet purus eget felis suscipit consequat. Sed vitae hendrerit odio. Integer ut dolor vitae nunc rhoncus mollis. Vestibulum id scelerisque magna, vitae tempor lacus. In fermentum, eros eget viverra efficitur, neque odio volutpat tortor, a sodales turpis nisi eget turpis.</p>
      </div>
    </section>
  `,
  styles: [
    `
    .container { max-width: 840px; }
    .card p { color: var(--text); }
    .card p + p { margin-top: 12px; }
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

  constructor() {
    this.api.getProfile().subscribe(p => this.profile = p);
  }
}


