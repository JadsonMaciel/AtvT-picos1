// import { Pessoa } from "./Pessoa";
// import { Corrida } from "./Corrida";
// // Definindo a classe para motoristas
// export class Motorista extends Pessoa {
//     public modeloCarro: string;
    
//     constructor(nome: string, id: number, modeloCarro: string) {
//       super(nome, id);
//       this.modeloCarro=modeloCarro
//     }
  
//     aceitarCorrida(corrida: Corrida): void {
//       corrida.designarMotorista(this);
//     }
//   }

import { Entity, Column, OneToMany, JoinColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Corrida } from "./Corrida";
import { Observer } from "./Observer";


@Entity()
export class Motorista extends Pessoa implements Observer{
    @Column()
    modeloCarro: string;

    @OneToMany(() => Corrida, corrida => corrida.motorista)
    @JoinColumn()
    corridas: Corrida[];
    sistemaUber: any;

    constructor(nome: string, id: number, modeloCarro: string) {
        super(nome, id);
        this.modeloCarro = modeloCarro;
    }

    aceitarCorrida(corrida: Corrida): void {
        corrida.designarMotorista(this);
    }

    update(corrida: Corrida): void { 
        //console.log(`Novo pedido de corrida recebido por ${this.nome}. Destino: ${corrida.destino}`);
        console.log(`notificação para ${this.nome}:`)
        console.log(`Corrida solicitada por ${corrida.passageiro.nome} para ${corrida.destino}\n`);
    }
}

//BUILDER
export class MotoristaBuilder {
    nome: string;
    id: number;
    carro: string;
  setNome(nome: string): MotoristaBuilder {
      this.nome = nome;
      return this;
  }

  setId(id: number): MotoristaBuilder {
      this.id = id;
      return this;
  }

  setCarro(carro: string): MotoristaBuilder {
    this.carro = carro;
    return this;
  }

  build(): Motorista {
      return new Motorista(this.nome, this.id, this.carro);
  }
}
//FIM BUILDER