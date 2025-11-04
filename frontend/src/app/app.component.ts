import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { LanguageService, Language } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  isMenuOpen = false;
  isLangMenuOpen = false;
  languageService = inject(LanguageService);

  get t() {
    return this.languageService.translations;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isLangMenuOpen = false;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleLangMenu(): void {
    this.isLangMenuOpen = !this.isLangMenuOpen;
    this.isMenuOpen = false;
  }

  closeLangMenu(): void {
    this.isLangMenuOpen = false;
  }

  selectLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
    this.closeLangMenu();
  }
}
