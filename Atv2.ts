// Classe 1
class Pessoa {
  nome: string;
  idade: number;
  cidade: string;

  constructor(nome: string, idade: number, cidade: string) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}

// Classe 2
class Produto {
  nome: string;
  preco: number;
  categoria: string;

  constructor(nome: string, preco: number, categoria: string) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }
}

// Classe 3
class Carro {
  modelo: string;
  ano: number;
  cor: string;

  constructor(modelo: string, ano: number, cor: string) {
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }
}

// Criar objetos para cada classe
const pessoa1 = new Pessoa("João", 25, "São Paulo");
const pessoa2 = new Pessoa("Maria", 30, "Rio de Janeiro");
const pessoa3 = new Pessoa("Carlos", 22, "Belo Horizonte");

const produto1 = new Produto("Celular", 1200, "Eletrônicos");
const produto2 = new Produto("Livro", 30, "Cultura");
const produto3 = new Produto("Notebook", 2500, "Eletrônicos");

const carro1 = new Carro("Civic", 2022, "Prata");
const carro2 = new Carro("Gol", 2019, "Azul");
const carro3 = new Carro("Corolla", 2020, "Preto");
