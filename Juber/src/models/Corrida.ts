import { Motorista } from "./Motorista";
import { Usuario } from "./Usuario";

// Definindo a classe para corridas
export class Corrida {

    private motorista: Motorista | null = null;
    public destino: string;
    public passageiro: Usuario;
    
    constructor(passageiro: Usuario, destino: string) {
        this.passageiro=passageiro
        this.destino=destino
    }
  
    designarMotorista(motorista: Motorista): void {
      this.motorista = motorista;
      console.log(`Motorista ${motorista.nome} designado para a corrida.`);
    }
  
    iniciarCorrida(): void {
      if (this.motorista) {
        console.log(`Corrida para ${this.destino} iniciada com o motorista ${this.motorista.nome}.`);
      } else {
        console.log('Nenhum motorista designado para a corrida.');
      }
    }
  }
  