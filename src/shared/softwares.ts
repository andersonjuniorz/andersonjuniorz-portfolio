import { CardItem } from "../app/interfaces/cardItem.interface";

export const SoftwareProjects: CardItem[] = [
    {
        title: 'Sistema de Gestão (Meu TCC)', 
        description: 'Descrição do projeto 1',
        image: 'header-bg.png', 
        text: 'Sistema de Gerenciamento de produtos. Nele é possível cadastrar clientes, fornecedores, novos produtos, efetuar compras e dar baixa no estoque.',
        technologies: ['Angular', 'TypeScript']
    },
    { 
        title: 'SimpleTasks', 
        description: 'Gerenciador de Tarefas minimalista',
        image: 'header-bg.png', 
        text: 'Este software é um gerenciador de tarefas com foco em ser um software minimalista. Nele é possível criar e entrar em várias contas, Nele pode existir categorias com várias tarefas, se uma categoria de estudos de idiomas, Categoria de tarefas de estudos de português para não esquecer e também é possível, concluir, apagar e editar uma tarefa e categoria. Este sistema foi feito em Java (Swing). ',
        technologies: ['Angular', 'TypeScript']
    },
];
