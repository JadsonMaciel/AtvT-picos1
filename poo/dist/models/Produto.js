"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const Entidade_1 = require("./Entidade");
// Classe 2 - Produto
//Criando uma herança
class Produto extends Entidade_1.Entidade {
    constructor(nome, preco, categoria) {
        super(nome);
        this._preco = preco;
        this._categoria = categoria;
    }
    apresentar() {
        console.log(`Produto: ${this.nome}, Preço: R$${this._preco.toFixed(2)}, Categoria: ${this._categoria}.`);
    }
}
exports.Produto = Produto;
