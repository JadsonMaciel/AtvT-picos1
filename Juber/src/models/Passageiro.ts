import { Entity, OneToMany, JoinColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Corrida } from "./Corrida";

@Entity()
export class Passageiro extends Pessoa {
    sistemaUber: any;
    constructor(nome: string, id: number) {
        super(nome, id);
    }

    @OneToMany(() => Corrida, corrida => corrida.passageiro)
    @JoinColumn()
    corridas: Corrida[];

    solicitarCorrida(destino: string): Corrida {
        return new Corrida(this, destino);
    }
}

