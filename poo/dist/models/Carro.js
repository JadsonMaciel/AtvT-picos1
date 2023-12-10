"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Entidade_1 = require("./Entidade");
// Classe 3 - Carro
//Criando uma herança
class Carro extends Entidade_1.Entidade {
    constructor(nome, ano, cor) {
        super(nome);
        this._ano = ano;
        this._cor = cor;
    }
    apresentar() {
        console.log(`${this.nome} é um carro fabricado em ${this._ano} e tem a cor ${this._cor}.`);
    }
}
exports.Carro = Carro;
