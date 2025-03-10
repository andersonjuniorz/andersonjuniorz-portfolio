import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-button',
  imports: [CommonModule],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})

export class CardButtonComponent {
  @Input() techName: string = '';
  @Input() backgroundColor: string = '#333';
}
