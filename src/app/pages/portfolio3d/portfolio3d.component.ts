import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardButtonComponent } from '../../components/card-button/card-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { CommonModule } from '@angular/common';
import { technologies } from '../../../shared/ technologies';
import { CardItem } from '../../interfaces/cardItem.interface';
import { projects3D } from '../../../shared/projects-3d';
import { TechButtonComponent } from '../../components/tech-button/tech-button.component';
import { TruncatePipe } from '../../Pipe/truncatePipe';

@Component({
  selector: 'app-portfolio3d',
  imports: [ 
    CommonModule, 
    MatCardModule, 
    MatDialogModule,
    TechButtonComponent,
    TruncatePipe
  ],
  templateUrl: './portfolio3d.component.html',
  styleUrl: './portfolio3d.component.scss'
})
export class Portfolio3dComponent {

  technologies = technologies; //Obtendo Dicionario de tecnologias

  /* ---------------- ARRAY DE PROJETOS --------------- */

  projects3d: CardItem[] = projects3D;


  /* ------------- CONSTRUCTOR, POP UP CARD ------------- */ 

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