import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardButtonComponent } from '../../components/card-button/card-button.component';

@Component({
  selector: 'app-portfolioweb',
  imports: [MatCardModule, CardButtonComponent],
  templateUrl: './portfolioweb.component.html',
  styleUrl: './portfolioweb.component.scss'
})
export class PortfoliowebComponent {

}
