import { Usuario } from "./models/Usuario";
import { SistemaUber } from "./models/Sistemauber";
import { Motorista } from "./models/Motorista";



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
  
  sistemaUber.solicitarCorrida(usuario2, 'DestinoA');
  sistemaUber.designarMotoristaParaCorrida(motorista1, sistemaUber.getCorridas()[0]);
  sistemaUber.iniciarCorrida(sistemaUber.getCorridas()[0]);


  