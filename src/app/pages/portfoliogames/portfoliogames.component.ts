import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardButtonComponent } from '../../components/card-button/card-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfoliogames',
  imports: [ CommonModule, MatCardModule, MatDialogModule, CardButtonComponent],
  templateUrl: './portfoliogames.component.html',
  styleUrl: './portfoliogames.component.scss'
})

export class PortfoliogamesComponent {

    projects = [
      { title: 'Estagiário Na Usina', description: 'Descrição do projeto 1', image: 'header-bg.png', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?ur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?' },
      { title: 'Argonauta (PC & VR)', description: 'Descrição do projeto 1', image: 'header-bg.png', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?ur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?' },
      { title: 'Jogo do Mosquito (Remake)', description: 'Descrição do projeto 2', image: 'header-bg.png', text: 'LoreLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio? , distinctio?m ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?' },
      { title: 'Simulador de Treinamento de Emergência', description: 'Descrição do projeto 2', image: 'header-bg.png', text: 'LoreLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio? , distinctio?m ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?' },
      { title: 'Jogo da Reserva', description: 'Descrição do projeto 2', image: 'header-bg.png', text: 'LoreLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio? , distinctio?m ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus magni ab possimus, velit rerum ullam numquam corporis ipsam dolores, tenetur eaque obcaecati iusto tempora. Iste, esse voluptate. Unde, distinctio?' },
    ];
  
    constructor(private dialog: MatDialog) {}
  
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
