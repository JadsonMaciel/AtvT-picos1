// Definindo a classe base para usuários
class Usuario {
    constructor(public nome: string, public id: number) {}
  
    solicitarCorrida(destino: string): Corrida {
      return new Corrida(this, destino);
    }
  }
  
  // Definindo a classe para motoristas
  class Motorista extends Usuario {
    constructor(nome: string, id: number, public modeloCarro: string) {
      super(nome, id);
    }
  
    aceitarCorrida(corrida: Corrida): void {
      corrida.designarMotorista(this);
    }
  }
  
  // Definindo a classe para corridas
  class Corrida {
    private motorista: Motorista | null = null;
  
    constructor(public passageiro: Usuario, public destino: string) {}
  
    designarMotorista(motorista: Motorista): void {
      this.motorista = motorista;
      console.log(`Motorista ${motorista.nome} designado para a corrida.`);
    }
  
    iniciarCorrida(): void {
      if (this.motorista) {
        console.log(`Corrida para ${this.destino} iniciada com o motorista ${this.motorista.nome}.`);
      } else {
        console.log('Nenhum motorista designado para a corrida.');
      }
    }
  }
  
  // Classe principal que gerencia o sistema Uber
  class SistemaUber {
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
  
  