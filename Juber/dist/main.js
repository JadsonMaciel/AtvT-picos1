"use strict";
// Definindo a classe base para usuários
class Usuario {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    solicitarCorrida(destino) {
        return new Corrida(this, destino);
    }
}
// Definindo a classe para motoristas
class Motorista extends Usuario {
    constructor(nome, id, modeloCarro) {
        super(nome, id);
        this.modeloCarro = modeloCarro;
    }
    aceitarCorrida(corrida) {
        corrida.designarMotorista(this);
    }
}
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
// Exemplo de uso do sistema Uber
const sistemaUber = new SistemaUber();
const usuario1 = new Usuario('Jadson', 1);
const usuario2 = new Usuario('Paulo', 2);
sistemaUber.adicionarUsuario(usuario1);
sistemaUber.adicionarUsuario(usuario2);
const motorista1 = new Motorista('Thiago', 101, 'Carro1');
const motorista2 = new Motorista('Bruno', 102, 'Carro2');
sistemaUber.adicionarMotorista(motorista1);
sistemaUber.adicionarMotorista(motorista2);
sistemaUber.solicitarCorrida(usuario1, 'DestinoA');
sistemaUber.designarMotoristaParaCorrida(motorista1, sistemaUber.getCorridas()[0]);
sistemaUber.iniciarCorrida(sistemaUber.getCorridas()[0]);
