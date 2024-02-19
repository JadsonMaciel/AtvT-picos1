"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Pessoa_1 = require("./Pessoa");
const Passageiro_1 = require("./Passageiro");
const Motorista_1 = require("./Motorista");
const Corrida_1 = require("./Corrida");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Juber',
    synchronize: true,
    logging: true,
    entities: [Pessoa_1.Pessoa, Passageiro_1.Passageiro, Motorista_1.Motorista, Corrida_1.Corrida],
});
AppDataSource.initialize().then(() => {
    console.log('Conectado ao banco de dados');
}).catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});
exports.default = AppDataSource;
