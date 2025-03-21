import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TruncatePipe } from '../../Pipe/truncatePipe';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component'; //Pop up
import { CardItem } from '../../interfaces/cardItem.interface';
import { projectsWebSoftwares } from '../../../shared/projects-web-softwares';
import { SoftwareProjects } from '../../../shared/softwares';
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

  projects: CardItem[] = projectsWebSoftwares;
  softwares: CardItem[] = SoftwareProjects;


  /* ------------- CONSTRUCTOR, POP UP CARD --------------- */ 

  constructor(private dialog: MatDialog) {}

  /* -------------------- METHODS ----------------------- */

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