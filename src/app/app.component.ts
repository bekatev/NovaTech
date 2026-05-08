import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  private static readonly DESKTOP_BREAKPOINT = 1024;
  private readonly desktopMediaQuery: MediaQueryList | undefined;
  private readonly handleDesktopMediaChange = (event: MediaQueryListEvent): void => {
    this.isDesktopView = event.matches;
    if (this.isDesktopView) {
      this.closeMobileMenu();
    }
  };

  isDarkTheme = true;
  isDesktopView = false;
  isMobileMenuOpen = false;

  readonly navItems = [
    { label: 'Our Businesses', path: '/businesses' },
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.desktopMediaQuery = this.document.defaultView?.matchMedia(
      `(min-width: ${AppComponent.DESKTOP_BREAKPOINT}px)`
    );
    const savedTheme = localStorage.getItem('novatech-theme');
    this.isDarkTheme = savedTheme !== 'light';
    this.updateViewportState();
    this.desktopMediaQuery?.addEventListener('change', this.handleDesktopMediaChange);
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('novatech-theme', this.isDarkTheme ? 'dark' : 'light');
    this.applyTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateBodyScrollLock();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.updateBodyScrollLock();
  }

  ngOnDestroy(): void {
    this.desktopMediaQuery?.removeEventListener('change', this.handleDesktopMediaChange);
    this.document.body.style.removeProperty('overflow');
  }

  private applyTheme(): void {
    this.document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
  }

  private updateViewportState(): void {
    if (this.desktopMediaQuery) {
      this.isDesktopView = this.desktopMediaQuery.matches;
    } else {
      this.isDesktopView = false;
    }
    if (this.isDesktopView && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  private updateBodyScrollLock(): void {
    if (this.isMobileMenuOpen) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.removeProperty('overflow');
    }
  }
}
