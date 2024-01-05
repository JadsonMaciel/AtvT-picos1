"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const Corrida_1 = require("./Corrida");
// Definindo a classe base para usuários
class Usuario {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    solicitarCorrida(destino) {
        return new Corrida_1.Corrida(this, destino);
    }
}
exports.Usuario = Usuario;
