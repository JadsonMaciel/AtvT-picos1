import { Entidade } from "./Entidade";
// Classe 3 - Carro
//Criando uma herança
export class Carro extends Entidade {
    private _ano: number;
    private _cor: string;
  
    constructor(nome: string, ano: number, cor: string) {
      super(nome);
      this._ano = ano;
      this._cor = cor;
    }
  
    
    apresentar(): void {
      console.log(`${this.nome} é um carro fabricado em ${this._ano} e tem a cor ${this._cor}.`);
    }
  
    
    
  }
  