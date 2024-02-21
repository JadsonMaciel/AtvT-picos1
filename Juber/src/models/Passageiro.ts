import { Entity, OneToMany, JoinColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Corrida } from "./Corrida";

@Entity()
export class Passageiro extends Pessoa {
    sistemaUber: any;
    constructor ( nome: string, id: number) {
        super(nome, id);
    }

    @OneToMany(() => Corrida, corrida => corrida.passageiro)
    @JoinColumn()
    corridas: Corrida[];

    solicitarCorrida(destino: string): Corrida {
        return new Corrida(this, destino);
    }
}

   export class PassageiroBuilder {
          nome: string;
          id: number;
        setNome(nome: string): PassageiroBuilder {
            this.nome = nome;
            return this;
        }

        setId(id: number): PassageiroBuilder {
            this.id = id;
            return this;
        }

        build(): Passageiro {
            return new Passageiro(this.nome, this.id);
        }
    }
    

   