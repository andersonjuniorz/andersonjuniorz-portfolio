import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { CommonModule } from '@angular/common';
import { CardItem } from '../../interfaces/cardItem.interface';
import { projectsGames } from '../../../shared/projects-games';
import { technologies } from '../../../shared/ technologies';
import { TechButtonComponent } from '../../components/tech-button/tech-button.component';
import { TruncatePipe } from '../../Pipe/truncatePipe';

@Component({
  selector: 'app-portfoliogames',
  imports: [ 
    CommonModule, 
    MatCardModule, 
    MatDialogModule, 
    TechButtonComponent,
    TruncatePipe
  ],
  templateUrl: './portfoliogames.component.html',
  styleUrl: './portfoliogames.component.scss'
})

export class PortfoliogamesComponent {

    technologies = technologies; //Obtendo Dicionario de tecnologias
  
  /* ---------------- ARRAY DE PROJETOS --------------- */
  
    games: CardItem[] = projectsGames; //Array de projetos

  /* ------------- CONSTRUCTOR, POP UP CARD --------------- */ 
  
  constructor(private dialog: MatDialog) {}

  /* -------------------- METHODS ----------------------- */
  
    openProjectDetails(project: any) {
      this.dialog.open(ProjectDialogComponent, {
        width: '95%',
        maxWidth: '100%',
        height: '95%',
        maxHeight: '100%',
        data: project,
      });
  }
}
