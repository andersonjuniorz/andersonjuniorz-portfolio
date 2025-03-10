import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardButtonComponent } from '../../components/card-button/card-button.component';

@Component({
  selector: 'app-portfoliogames',
  imports: [MatCardModule, CardButtonComponent],
  templateUrl: './portfoliogames.component.html',
  styleUrl: './portfoliogames.component.scss'
})

export class PortfoliogamesComponent {}
