// Classe base
class Entidade {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  
  get nome(): string {
    return this._nome;
  }

  
  getnome()  {
    return this._nome;
  }
  
  setnome(nome: string){
    this._nome = nome;
  }

  
  apresentar(): void {
    console.log(`Olá, eu sou ${this.nome}.`);
  }
}

// Classe 1 - Pessoa
class Pessoa extends Entidade {
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

// Classe 2 - Produto
class Produto extends Entidade {
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

// Classe 3 - Carro
class Carro extends Entidade {
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

  
  ligar(): void {
    console.log(`${this.nome} está ligado.`);
  }
}

// Criar objetos para cada classe
const pessoa1 = new Pessoa("João", 25, "São Paulo");
const produto2 = new Produto("Livro", 30, "Cultura");
const carro3 = new Carro("Corolla", 2020, "Preto");

// Interagindo com os objetos usando polimorfismo
const entidades: Entidade[] = [pessoa1, produto2, carro3];

for (const entidade of entidades) {
  entidade.apresentar();
}
