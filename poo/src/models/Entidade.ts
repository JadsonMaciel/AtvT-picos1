// Classe base
export class Entidade {
    private _nome: string;
  
    constructor(nome: string) {
      this._nome = nome;
    }
  
    
    get nome(): string {
      return this._nome;
    }
  
        
    apresentar(): void {
      console.log(`Olá, eu sou ${this.nome}.`);
    }
  }