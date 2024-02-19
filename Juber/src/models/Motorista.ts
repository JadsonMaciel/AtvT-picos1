import { Entity, Column, OneToMany, JoinColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Corrida } from "./Corrida";

@Entity()
export class Motorista extends Pessoa {
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
}

