import { Technology } from "../app/interfaces/technology.interface";

/* Array de tecnologias para ser usado nos cards da página de serviços,
 * demonstrando as tecnologias usadas nos projetos.
 * Cada item é um objeto que segue a interface Technology.
 */

export const technologies: { [key: string]: Technology } = {
  Angular:    { name: 'Angular',    color: '#f0f' },
  TypeScript: { name: 'TypeScript', color: '#00f' },
  JavaScript: { name: 'JavaScript', color: '#f0f' },
  Java:       { name: 'Java',       color: '#f00' },
  MySQL:      { name: 'MySQL',      color: '#00f' },
  Unity:      { name: 'Unity',      color: '#00f' },
  Unreal:     { name: 'Unreal',     color: '#00f' },
  Blender:    { name: 'Blender',    color: '#00f' },
};
