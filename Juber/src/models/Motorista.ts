import { Usuario } from "./Usuario";
import { Corrida } from "./Corrida";
// Definindo a classe para motoristas
export class Motorista extends Usuario {
    constructor(nome: string, id: number, public modeloCarro: string) {
      super(nome, id);
    }
  
    aceitarCorrida(corrida: Corrida): void {
      corrida.designarMotorista(this);
    }
  }
  