import { Entidade } from "./Entidade";
// Classe 2 - Produto
//Criando uma herança
export class Produto extends Entidade {
    private _preco: number;
    private _categoria: string;
  
    constructor(nome: string, preco: number, categoria: string) {
      super(nome);
      this._preco = preco;
      this._categoria = categoria;
    }
  
   
    apresentar(): void {
      console.log(`Produto: ${this.nome}, Preço: R$${this._preco.toFixed(2)}, Categoria: ${this._categoria}.`);
    }
  }