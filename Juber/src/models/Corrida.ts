// import { Motorista } from "./Motorista";
// import { Passageiro } from "./Passageiro";
// // Definindo a classe para corridas
// export class Corrida {

  //   private motorista: Motorista | null = null;
  //   public destino: string;
  //   public passageiro: Passageiro;
    
  //   constructor(passageiro: Passageiro, destino: string) {
  //       this.passageiro=passageiro
  //       this.destino=destino
  //   }
  
  //   designarMotorista(motorista: Motorista): void {
  //     this.motorista = motorista;
  //     console.log(`Motorista ${motorista.nome} designado para a corrida.`);
  //   }
  
  //   iniciarCorrida(): void {
  //     if (this.motorista) {
  //       console.log(`Corrida para ${this.destino} iniciada com o motorista ${this.motorista.nome}.`);
  //     } else {
  //       console.log('Nenhum motorista designado para a corrida.');
  //     }
  //   }
  // }
  
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Passageiro } from "./Passageiro";
import { Motorista } from "./Motorista";

@Entity()
export class Corrida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destino: string;

  @ManyToOne(() => Passageiro, passageiro => passageiro.corridas)
  passageiro: Passageiro;

  @ManyToOne(() => Motorista, motorista => motorista.corridas)
  motorista: Motorista;

  @Column({ default: false })
  concluida: boolean;
    sistemaUber: any;

  constructor(passageiro: Passageiro, destino: string) {
    this.passageiro = passageiro;
    this.destino = destino;
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
  