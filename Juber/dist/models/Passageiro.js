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
exports.PassageiroBuilder = exports.Passageiro = void 0;
const typeorm_1 = require("typeorm");
const Pessoa_1 = require("./Pessoa");
const Corrida_1 = require("./Corrida");
let Passageiro = class Passageiro extends Pessoa_1.Pessoa {
    constructor(nome, id) {
        super(nome, id);
    }
    solicitarCorrida(destino) {
        return new Corrida_1.Corrida(this, destino);
    }
};
exports.Passageiro = Passageiro;
__decorate([
    (0, typeorm_1.OneToMany)(() => Corrida_1.Corrida, corrida => corrida.passageiro),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Passageiro.prototype, "corridas", void 0);
exports.Passageiro = Passageiro = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number])
], Passageiro);
class PassageiroBuilder {
    setNome(nome) {
        this.nome = nome;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    build() {
        return new Passageiro(this.nome, this.id);
    }
}
exports.PassageiroBuilder = PassageiroBuilder;
