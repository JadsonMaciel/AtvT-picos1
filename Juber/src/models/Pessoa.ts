import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }
}

