"use strict";
// import { Pessoa } from "./Pessoa";
// import { Corrida } from "./Corrida";
// // Definindo a classe para motoristas
// export class Motorista extends Pessoa {
//     public modeloCarro: string;
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
exports.MotoristaBuilder = exports.Motorista = void 0;
//     constructor(nome: string, id: number, modeloCarro: string) {
//       super(nome, id);
//       this.modeloCarro=modeloCarro
//     }
//     aceitarCorrida(corrida: Corrida): void {
//       corrida.designarMotorista(this);
//     }
//   }
const typeorm_1 = require("typeorm");
const Pessoa_1 = require("./Pessoa");
const Corrida_1 = require("./Corrida");
let Motorista = class Motorista extends Pessoa_1.Pessoa {
    constructor(nome, id, modeloCarro) {
        super(nome, id);
        this.modeloCarro = modeloCarro;
    }
    aceitarCorrida(corrida) {
        corrida.designarMotorista(this);
    }
    update(corrida) {
        //console.log(`Novo pedido de corrida recebido por ${this.nome}. Destino: ${corrida.destino}`);
        console.log(`notificação para ${this.nome}:`);
        console.log(`Corrida solicitada por ${corrida.passageiro.nome} para ${corrida.destino}\n`);
    }
};
exports.Motorista = Motorista;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Motorista.prototype, "modeloCarro", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Corrida_1.Corrida, corrida => corrida.motorista),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Motorista.prototype, "corridas", void 0);
exports.Motorista = Motorista = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number, String])
], Motorista);
//BUILDER
class MotoristaBuilder {
    setNome(nome) {
        this.nome = nome;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setCarro(carro) {
        this.carro = carro;
        return this;
    }
    build() {
        return new Motorista(this.nome, this.id, this.carro);
    }
}
exports.MotoristaBuilder = MotoristaBuilder;
//FIM BUILDER
