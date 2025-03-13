import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

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
    @Inject(PLATFORM_ID) private platformId: Object, // Injeta o identificador da plataforma
    @Inject(DOCUMENT) private document: Document // Usa DOCUMENT para manipulação segura do DOM
  ) {}


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { // Verifica se esta no navegador
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  GoToHome() {
    this.goToSection('header'); // Chama goToSection passando 'header' como ID
  }

  
  goToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) { 
      if (this.router.url === '/') {
        setTimeout(() => {
          const section = this.document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            const section = this.document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        });
      }
    }
  }
  

  goToContact() {
    
    if (isPlatformBrowser(this.platformId)) { // Garante que so rode no navegador
      
      if (this.router.url === '/') {
      
        const contactSection = this.document.getElementById('contact');

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }

      } else {
        
        this.router.navigate(['/']).then(() => {
         
          setTimeout(() => {
            const contactSection = this.document.getElementById('contact');

            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }

          }, 300);

        });
        
      }
    }
  }

}
