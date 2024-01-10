import { Usuario } from "./Usuario";
import { Motorista } from "./Motorista";
import { Corrida } from "./Corrida";
// Classe principal que gerencia o sistema Uber
export class SistemaUber {
    private usuarios: Usuario[] = [];
    private motoristas: Motorista[] = [];
    private corridas: Corrida[] = [];
  
    adicionarUsuario(usuario: Usuario): void {
      this.usuarios.push(usuario);
    }
  
    adicionarMotorista(motorista: Motorista): void {
      this.motoristas.push(motorista);
    }
  
    solicitarCorrida(usuario: Usuario, destino: string): void {
      const corrida = usuario.solicitarCorrida(destino);
      this.corridas.push(corrida);
      console.log(`Corrida solicitada por ${usuario.nome} para ${destino}.`);
    }
  
    designarMotoristaParaCorrida(motorista: Motorista, corrida: Corrida): void {
      motorista.aceitarCorrida(corrida);
    }
  
    iniciarCorrida(corrida: Corrida): void {
      corrida.iniciarCorrida();
    }
  
    // Método para acessar a lista de corridas
    getCorridas(): Corrida[] {
      return this.corridas;
    }
  }
