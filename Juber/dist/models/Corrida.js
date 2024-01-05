"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corrida = void 0;
// Definindo a classe para corridas
class Corrida {
    constructor(passageiro, destino) {
        this.passageiro = passageiro;
        this.destino = destino;
        this.motorista = null;
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
}
exports.Corrida = Corrida;
