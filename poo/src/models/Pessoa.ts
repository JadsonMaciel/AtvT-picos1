import { Entidade } from "./Entidade";
// Classe 1 - Pessoa
//Criando uma herança
export class Pessoa extends Entidade {
    private _idade: number;
    private _cidade: string;
  
    constructor(nome: string, idade: number, cidade: string) {
      super(nome);
      this._idade = idade;
      this._cidade = cidade;
    }
  
    
    apresentar(): void {
      console.log(`Olá, eu sou ${this.nome}, tenho ${this._idade} anos e moro em ${this._cidade}.`);
    }
  }