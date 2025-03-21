import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationEnd, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationService } from '../../Services/navigationService';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [
    MatButtonModule,
    RouterModule,
    MatMenuModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Logica para rolar a pagina para o topo apos a navegacao
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => window.scrollTo(0, 0));
    }
  }

  goToSection(sectionId: string) {
    this.navigationService.goToSection(sectionId);
  }

}