"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./models/Usuario");
const Sistemauber_1 = require("./models/Sistemauber");
const Motorista_1 = require("./models/Motorista");
// Exemplo de uso do sistema Uber
const sistemaUber = new Sistemauber_1.SistemaUber();
const usuario1 = new Usuario_1.Usuario('Jadson', 1);
const usuario2 = new Usuario_1.Usuario('Paulo', 2);
sistemaUber.adicionarUsuario(usuario1);
sistemaUber.adicionarUsuario(usuario2);
const motorista1 = new Motorista_1.Motorista('Thiago', 101, 'Carro1');
const motorista2 = new Motorista_1.Motorista('Bruno', 102, 'Carro2');
sistemaUber.adicionarMotorista(motorista1);
sistemaUber.adicionarMotorista(motorista2);
sistemaUber.solicitarCorrida(usuario1, 'DestinoA');
sistemaUber.designarMotoristaParaCorrida(motorista1, sistemaUber.getCorridas()[0]);
sistemaUber.iniciarCorrida(sistemaUber.getCorridas()[0]);
