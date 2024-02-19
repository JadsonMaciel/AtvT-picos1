"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corrida = void 0;
const typeorm_1 = require("typeorm");
const Passageiro_1 = require("./Passageiro");
const Motorista_1 = require("./Motorista");
let Corrida = class Corrida {
    constructor(passageiro, destino) {
        this.passageiro = passageiro;
        this.destino = destino;
    }
    designarMotorista(motorista) {
        this.motorista = motorista;
        console.log(`Motorista ${motorista.nome} designado para a corrida.`);
    }
    iniciarCorrida() {
        if (this.motorista) {
            console.log(`Corrida para ${this.destino} iniciada com o motorista ${this.motorista.nome}.`);
        }
        else {
            console.log('Nenhum motorista designado para a corrida.');
        }
    }
};
exports.Corrida = Corrida;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Corrida.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Corrida.prototype, "destino", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Passageiro_1.Passageiro, passageiro => passageiro.corridas),
    __metadata("design:type", Passageiro_1.Passageiro)
], Corrida.prototype, "passageiro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Motorista_1.Motorista, motorista => motorista.corridas),
    __metadata("design:type", Motorista_1.Motorista)
], Corrida.prototype, "motorista", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Corrida.prototype, "concluida", void 0);
exports.Corrida = Corrida = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Passageiro_1.Passageiro, String])
], Corrida);
