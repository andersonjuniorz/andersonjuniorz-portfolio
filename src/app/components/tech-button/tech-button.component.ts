import { Component, Input } from '@angular/core';
import { Technology } from '../../interfaces/technology.interface';
import { technologies } from '../../../shared/ technologies';

@Component({
  selector: 'app-tech-button',
  imports: [],
  templateUrl: './tech-button.component.html',
  styleUrl: './tech-button.component.scss'
})

export class TechButtonComponent {

  @Input() techName!: string;  // Espera o nome da tecnologia

  /* ------------------- METODOS ---------------------- */

  // Metodo para acessar dicionario
  getTechnology(techName: string): Technology {
    return technologies[techName];
  }

  // Obtem tecnologia com base no nome
  get technology(): Technology {
    return this.getTechnology(this.techName);
  }
}