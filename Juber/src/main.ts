
import { Passageiro } from "./models/Passageiro";
import { SistemaUber } from "./models/Sistemauber";
import { Motorista } from "./models/Motorista";
import { Corrida } from "./models/Corrida";
import { Pessoa } from "./models/Pessoa";
import { DataSource, EntityManager } from 'typeorm';
import "reflect-metadata"

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'Juber',
  synchronize: false,
  logging: false,
  entities: [Pessoa, Passageiro, Motorista, Corrida],
});

AppDataSource.initialize().then(async () => {
  const entityManager = new EntityManager(AppDataSource); // Create an instance of the EntityManager class with the AppDataSource argument

  const sistemaUber = new SistemaUber(entityManager); // Pass the instance of EntityManager to the SistemaUber constructor

  const usuario1 = new Passageiro('Jadson', 1);
  const usuario2 = new Passageiro('Paulo', 2);

  await sistemaUber.adicionarUsuario(usuario1);
  await sistemaUber.adicionarUsuario(usuario2);

  const motorista1 = new Motorista('Thiago', 101, 'Carro1');
  const motorista2 = new Motorista('Bruno', 102, 'Carro2');

  await sistemaUber.adicionarMotorista(motorista1);
  await sistemaUber.adicionarMotorista(motorista2);

  const corridas = await sistemaUber.getCorridas();
  const primeiraCorrida = corridas[0];

  await sistemaUber.solicitarCorrida(usuario2, 'DestinoA');
  sistemaUber.designarMotoristaParaCorrida(motorista2, primeiraCorrida);
  sistemaUber.iniciarCorrida(primeiraCorrida);
 
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados:', error);
});





  
  