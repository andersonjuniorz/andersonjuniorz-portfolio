import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardButtonComponent } from '../../components/card-button/card-button.component';

@Component({
  selector: 'app-portfolio3d',
  imports: [MatCardModule, CardButtonComponent],
  templateUrl: './portfolio3d.component.html',
  styleUrl: './portfolio3d.component.scss'
})
export class Portfolio3dComponent {

}
