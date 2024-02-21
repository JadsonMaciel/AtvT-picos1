// import { Entity, PrimaryGeneratedColumn, OneToMany, getRepository } from "typeorm";
// import { Passageiro } from "./Passageiro";
// import { Motorista } from "./Motorista";
// import { Corrida } from "./Corrida";

// @Entity()
// export class SistemaUber {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @OneToMany(() => Passageiro, passageiro => passageiro.sistemaUber)
//     usuarios: Passageiro[];

//     @OneToMany(() => Motorista, motorista => motorista.sistemaUber)
//     motoristas: Motorista[];

//     @OneToMany(() => Corrida, corrida => corrida.sistemaUber)
//     corridas: Corrida[];

//     async adicionarUsuario(passageiro: Passageiro): Promise<void> {
//         const passageiroRepository = getRepository(Passageiro);
//         await passageiroRepository.save(passageiro);
//     }

//     async adicionarMotorista(motorista: Motorista): Promise<void> {
//         const motoristaRepository = getRepository(Motorista);
//         await motoristaRepository.save(motorista);
//     }

//     async solicitarCorrida(passageiro: Passageiro, destino: string): Promise<void> {
//         const corrida = passageiro.solicitarCorrida(destino);
//         const corridaRepository = getRepository(Corrida);
//         await corridaRepository.save(corrida);
//         console.log(`Corrida solicitada por ${passageiro.nome} para ${destino}.`);
//     }

//     designarMotoristaParaCorrida(motorista: Motorista, corrida: Corrida): void {
//         motorista.aceitarCorrida(corrida);
//     }

//     iniciarCorrida(corrida: Corrida): void {
//         corrida.iniciarCorrida();
//     }

//     // Método para acessar a lista de corridas
//     async getCorridas(): Promise<Corrida[]> {
//         const corridaRepository = getRepository(Corrida);
//         return await corridaRepository.find();
//     }
// }

import { Entity, PrimaryGeneratedColumn, OneToMany, EntityManager } from "typeorm";
import { Passageiro } from "./Passageiro";
import { Motorista } from "./Motorista";
import { Corrida } from "./Corrida";
import { InjectEntityManager } from "@nestjs/typeorm";
import { Observer, Subject } from "./Observer";

@Entity()
export class SistemaUber implements Subject{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Passageiro, passageiro => passageiro.sistemaUber)
    usuarios: Passageiro[];

    @OneToMany(() => Motorista, motorista => motorista.sistemaUber)
    motoristas: Motorista[];

    @OneToMany(() => Corrida, corrida => corrida.sistemaUber)
    corridas: Corrida[];
//Observer
    private observers: Observer[] = [];
    
    addObserver(observers: Observer): void {
        this.observers.push(observers);
    }

    removeObserver(observers: Observer): void {
        const index = this.observers.indexOf(observers);
        this.observers.splice(index, 1);
    }

    notifyObservers(corrida:Corrida): void {
        this.observers.forEach(observer => observer.update(corrida));
    }
// fim observer
    constructor(
        @InjectEntityManager()
        private readonly entityManager: EntityManager
    ) {}

    async adicionarUsuario(passageiro: Passageiro): Promise<void> {
        await this.entityManager.save(Passageiro, passageiro);
    }

    async adicionarMotorista(motorista: Motorista): Promise<void> {
        await this.entityManager.save(Motorista, motorista);
    }

    async solicitarCorrida(passageiro: Passageiro, destino: string): Promise<void> {
        const corrida = passageiro.solicitarCorrida(destino);
        await this.entityManager.save(Corrida, corrida);
        this.notifyObservers(corrida);
        console.log('Corrida solicitada.');
    }

    designarMotoristaParaCorrida(motorista: Motorista, corrida: Corrida): void {
        motorista.aceitarCorrida(corrida);
    }

    iniciarCorrida(corrida: Corrida): void {
        corrida.iniciarCorrida();
    }

    // Método para acessar a lista de corridas
    async getCorridas(): Promise<Corrida[]> {
        return await this.entityManager.find(Corrida);
    }
}
