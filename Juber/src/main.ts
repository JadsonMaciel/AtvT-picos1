
import { Passageiro, PassageiroBuilder } from "./models/Passageiro";
import { SistemaUber } from "./models/Sistemauber";
import { Motorista, MotoristaBuilder } from "./models/Motorista";
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
  const entityManager = new EntityManager(AppDataSource); 

  const sistemaUber = new SistemaUber(entityManager); 

  const usuario1 = new PassageiroBuilder()
    .setNome('JADSON')
    .setId(1)
    .build();

  const usuario2 = new PassageiroBuilder()
    .setNome('PAULO')
    .setId(2)
    .build();
  

  await sistemaUber.adicionarUsuario(usuario1);
  await sistemaUber.adicionarUsuario(usuario2);

  const motorista1 = new MotoristaBuilder()
  .setNome('THIAGO')
  .setId(101)
  .setCarro('Carro1')
  .build();

  const motorista2 = new MotoristaBuilder()
  .setNome('BRUNO')
  .setId(102)
  .setCarro('Carro2')
  .build();

  sistemaUber.addObserver(motorista1);
  sistemaUber.addObserver(motorista2);
  
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





  
  