import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true // Permite que seja importado sem precisar de um módulo
})

export class TruncatePipe implements PipeTransform {
    
  transform(value: string, limit: number = 100, trail: string = '...'): string {


    if (!value) return ''; // Se o valor for nulo ou indefinido, retorne uma string vazia.

    /* Verifica se o comprimento da string (value.length) é maior que o limite especificado (limit).
     * Se for, ele retorna os primeiros 'limit' caracteres da string e adiciona o 'trail' (reticências ou outro texto).
     * Caso contrário, retorna o texto original sem alterações.
     */
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
