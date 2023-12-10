"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const Entidade_1 = require("./Entidade");
// Classe 1 - Pessoa
//Criando uma herança
class Pessoa extends Entidade_1.Entidade {
    constructor(nome, idade, cidade) {
        super(nome);
        this._idade = idade;
        this._cidade = cidade;
    }
    apresentar() {
        console.log(`Olá, eu sou ${this.nome}, tenho ${this._idade} anos e moro em ${this._cidade}.`);
    }
}
exports.Pessoa = Pessoa;
