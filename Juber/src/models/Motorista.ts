import { Usuario } from "./Usuario";
import { Corrida } from "./Corrida";
// Definindo a classe para motoristas
export class Motorista extends Usuario {
    public modeloCarro: string;
    
    constructor(nome: string, id: number, modeloCarro: string) {
      super(nome, id);
      this.modeloCarro=modeloCarro
    }
  
    aceitarCorrida(corrida: Corrida): void {
      corrida.designarMotorista(this);
    }
  }
  