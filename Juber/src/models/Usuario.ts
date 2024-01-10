import { Corrida } from "./Corrida";
// Definindo a classe base para usuários
export class Usuario {
    public nome: string;
    public id: number;
    constructor(nome: string, id: number) {
        this.nome=nome
        this.id=id
    }
  
    solicitarCorrida(destino: string): Corrida {
      return new Corrida(this, destino);
    }
  }