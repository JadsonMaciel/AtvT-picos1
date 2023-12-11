import { Entidade } from "./models/Entidade";
import { Pessoa } from "./models/Pessoa";
import { Carro } from "./models/Carro";
import { Produto } from "./models/Produto";


// Criar objetos para cada classe
const pessoa1 = new Pessoa("Jadson", 20, "Manaus");
const produto2 = new Produto("Livro", 30, "Cultura");
const carro3 = new Carro("Onix", 2020, "Prata");

// Interagindo com os objetos usando polimorfismo
const entidades: Entidade[] = [pessoa1, produto2, carro3];
//Iteração sobre cada elemento do vetor entidades na variavel x 
for (const x of entidades) {
  x.apresentar();
}
