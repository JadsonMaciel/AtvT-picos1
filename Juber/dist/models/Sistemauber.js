"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaUber = void 0;
// Classe principal que gerencia o sistema Uber
class SistemaUber {
    constructor() {
        this.usuarios = [];
        this.motoristas = [];
        this.corridas = [];
    }
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    adicionarMotorista(motorista) {
        this.motoristas.push(motorista);
    }
    solicitarCorrida(usuario, destino) {
        const corrida = usuario.solicitarCorrida(destino);
        this.corridas.push(corrida);
        console.log(`Corrida solicitada por ${usuario.nome} para ${destino}.`);
    }
    designarMotoristaParaCorrida(motorista, corrida) {
        motorista.aceitarCorrida(corrida);
    }
    iniciarCorrida(corrida) {
        corrida.iniciarCorrida();
    }
    // Método para acessar a lista de corridas
    getCorridas() {
        return this.corridas;
    }
}
exports.SistemaUber = SistemaUber;
