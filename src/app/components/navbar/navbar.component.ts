import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationService } from '../../Services/navigationService';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule, 
    MatButtonModule,
    RouterModule,
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

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
