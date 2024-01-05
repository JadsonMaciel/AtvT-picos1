import { Corrida } from "./Corrida";
// Definindo a classe base para usuários
export class Usuario {
    constructor(public nome: string, public id: number) {}
  
    solicitarCorrida(destino: string): Corrida {
      return new Corrida(this, destino);
    }
  }