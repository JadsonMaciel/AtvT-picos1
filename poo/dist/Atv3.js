"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./models/Pessoa");
const Carro_1 = require("./models/Carro");
const Produto_1 = require("./models/Produto");
// Criar objetos para cada classe
const pessoa1 = new Pessoa_1.Pessoa("Jadson", 20, "Manaus");
const produto2 = new Produto_1.Produto("Livro", 30, "Cultura");
const carro3 = new Carro_1.Carro("Onix", 2020, "Prata");
// Interagindo com os objetos usando polimorfismo
const entidades = [pessoa1, produto2, carro3];
for (const entidade of entidades) {
    entidade.apresentar();
}
