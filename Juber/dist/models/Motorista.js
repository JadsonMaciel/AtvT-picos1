"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorista = void 0;
const Usuario_1 = require("./Usuario");
// Definindo a classe para motoristas
class Motorista extends Usuario_1.Usuario {
    constructor(nome, id, modeloCarro) {
        super(nome, id);
        this.modeloCarro = modeloCarro;
    }
    aceitarCorrida(corrida) {
        corrida.designarMotorista(this);
    }
}
exports.Motorista = Motorista;
