import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [
    MatButtonModule,
    RouterModule,
    MatMenuModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object, // Injeta o identificador da plataforma
    @Inject(DOCUMENT) private document: Document // Usa DOCUMENT para manipulacao segura do DOM
  ) {}

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