import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  goToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const scroll = () => {
        const section = this.document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      };

      if (this.router.url === '/') {
        scroll();
      } else {
        this.router.navigate(['/']).then(() => setTimeout(scroll, 300));
      }
    }
  }
}
