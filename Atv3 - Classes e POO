// Classe base
class Entidade {
  constructor(public nome: string) {}
}

// Classe 1 - Pessoa
class Pessoa extends Entidade {
  idade: number;
  cidade: string;

  constructor(nome: string, idade: number, cidade: string) {
    super(nome);
    this.idade = idade;
    this.cidade = cidade;
  }

  apresentar(): void {
    console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`);
  }
}

// Classe 2 - Produto
class Produto extends Entidade {
  preco: number;
  categoria: string;

  constructor(nome: string, preco: number, categoria: string) {
    super(nome);
    this.preco = preco;
    this.categoria = categoria;
  }

  exibirDetalhes(): void {
    console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}.`);
  }
}

// Classe 3 - Carro
class Carro extends Entidade {
  ano: number;
  cor: string;

  constructor(nome: string, ano: number, cor: string) {
    super(nome);
    this.ano = ano;
    this.cor = cor;
  }

  ligar(): void {
    console.log(`${this.nome} está ligado.`);
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

// Interagindo com os objetos
pessoa1.apresentar();
produto2.exibirDetalhes();
carro3.ligar();
