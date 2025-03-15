import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardButtonComponent } from '../../components/card-button/card-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TruncatePipe } from '../../Pipe/truncatePipe';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component'; //Pop up
import { CardItem } from '../../interfaces/cardItem.interface';
import { WebProjects } from '../../../shared/webProjects';
import { SoftwareProjects } from '../../../shared/softwares';
import { Technology } from '../../interfaces/technology.interface';
import { technologies } from '../../../shared/ technologies';
import { TechButtonComponent } from '../../components/tech-button/tech-button.component';



@Component({
  selector: 'app-portfolioweb',
  imports: [
    CommonModule, 
    MatCardModule, 
    MatDialogModule, 
    TechButtonComponent,
    TruncatePipe,
    TechButtonComponent
  ],
  templateUrl: './portfolioweb.component.html',
  styleUrl: './portfolioweb.component.scss'
})


export class PortfoliowebComponent {

  technologies = technologies; //Obtendo Dicionario de tecnologias

  /* ---------------- ARRAY DE PROJETOS --------------- */

  projects: CardItem[] = WebProjects;
  softwares: CardItem[] = SoftwareProjects;


  /* ------------- CONSTRUCTOR, POP UP CARD --------------- */ 

  constructor(private dialog: MatDialog) {}


  openProjectDetails(project: any) {
    this.dialog.open(ProjectDialogComponent, {
      width: '95%',      // 80% da largura da tela
      maxWidth: '100%',  // Largura máxima
      height: '95%',     // A altura vai ser ajustada automaticamente com base no conteúdo
      maxHeight: '100%', // Ajusta a altura máxima para algo proporcional à tela
      data: project,     // Passando os dados do projeto para o modal
    });
  }

}