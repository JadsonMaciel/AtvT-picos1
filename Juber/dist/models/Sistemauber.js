"use strict";
// import { Entity, PrimaryGeneratedColumn, OneToMany, getRepository } from "typeorm";
// import { Passageiro } from "./Passageiro";
// import { Motorista } from "./Motorista";
// import { Corrida } from "./Corrida";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaUber = void 0;
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
const typeorm_1 = require("typeorm");
const Passageiro_1 = require("./Passageiro");
const Motorista_1 = require("./Motorista");
const Corrida_1 = require("./Corrida");
const typeorm_2 = require("@nestjs/typeorm");
let SistemaUber = class SistemaUber {
    addObserver(observers) {
        this.observers.push(observers);
    }
    removeObserver(observers) {
        const index = this.observers.indexOf(observers);
        this.observers.splice(index, 1);
    }
    notifyObservers(corrida) {
        this.observers.forEach(observer => observer.update(corrida));
    }
    // fim observer
    constructor(entityManager) {
        this.entityManager = entityManager;
        //Observer
        this.observers = [];
    }
    adicionarUsuario(passageiro) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.entityManager.save(Passageiro_1.Passageiro, passageiro);
        });
    }
    adicionarMotorista(motorista) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.entityManager.save(Motorista_1.Motorista, motorista);
        });
    }
    solicitarCorrida(passageiro, destino) {
        return __awaiter(this, void 0, void 0, function* () {
            const corrida = passageiro.solicitarCorrida(destino);
            yield this.entityManager.save(Corrida_1.Corrida, corrida);
            this.notifyObservers(corrida);
            console.log('Corrida solicitada.');
        });
    }
    designarMotoristaParaCorrida(motorista, corrida) {
        motorista.aceitarCorrida(corrida);
    }
    iniciarCorrida(corrida) {
        corrida.iniciarCorrida();
    }
    // Método para acessar a lista de corridas
    getCorridas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.entityManager.find(Corrida_1.Corrida);
        });
    }
};
exports.SistemaUber = SistemaUber;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SistemaUber.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Passageiro_1.Passageiro, passageiro => passageiro.sistemaUber),
    __metadata("design:type", Array)
], SistemaUber.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Motorista_1.Motorista, motorista => motorista.sistemaUber),
    __metadata("design:type", Array)
], SistemaUber.prototype, "motoristas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Corrida_1.Corrida, corrida => corrida.sistemaUber),
    __metadata("design:type", Array)
], SistemaUber.prototype, "corridas", void 0);
exports.SistemaUber = SistemaUber = __decorate([
    (0, typeorm_1.Entity)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], SistemaUber);
