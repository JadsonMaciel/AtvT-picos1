"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Passageiro_1 = require("./models/Passageiro");
const Sistemauber_1 = require("./models/Sistemauber");
const Motorista_1 = require("./models/Motorista");
const Corrida_1 = require("./models/Corrida");
const Pessoa_1 = require("./models/Pessoa");
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Juber',
    synchronize: false,
    logging: false,
    entities: [Pessoa_1.Pessoa, Passageiro_1.Passageiro, Motorista_1.Motorista, Corrida_1.Corrida],
});
AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const entityManager = new typeorm_1.EntityManager(AppDataSource); // Create an instance of the EntityManager class with the AppDataSource argument
    const sistemaUber = new Sistemauber_1.SistemaUber(entityManager); // Pass the instance of EntityManager to the SistemaUber constructor
    const usuario1 = new Passageiro_1.PassageiroBuilder()
        .setNome('JADSON')
        .setId(1)
        .build();
    const usuario2 = new Passageiro_1.PassageiroBuilder()
        .setNome('PAULO')
        .setId(2)
        .build();
    yield sistemaUber.adicionarUsuario(usuario1);
    yield sistemaUber.adicionarUsuario(usuario2);
    const motorista1 = new Motorista_1.MotoristaBuilder()
        .setNome('THIAGO')
        .setId(101)
        .setCarro('Carro1')
        .build();
    const motorista2 = new Motorista_1.MotoristaBuilder()
        .setNome('BRUNO')
        .setId(102)
        .setCarro('Carro2')
        .build();
    sistemaUber.addObserver(motorista1);
    sistemaUber.addObserver(motorista2);
    yield sistemaUber.adicionarMotorista(motorista1);
    yield sistemaUber.adicionarMotorista(motorista2);
    const corridas = yield sistemaUber.getCorridas();
    const primeiraCorrida = corridas[0];
    yield sistemaUber.solicitarCorrida(usuario2, 'DestinoA');
    sistemaUber.designarMotoristaParaCorrida(motorista2, primeiraCorrida);
    sistemaUber.iniciarCorrida(primeiraCorrida);
})).catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});
