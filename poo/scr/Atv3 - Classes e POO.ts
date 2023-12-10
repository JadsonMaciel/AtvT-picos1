
// Criar objetos para cada classe
const pessoa1 = new Pessoa("João", 25, "São Paulo");
const produto2 = new Produto("Livro", 30, "Cultura");
const carro3 = new Carro("Corolla", 2020, "Preto");

// Interagindo com os objetos usando polimorfismo
const entidades: Entidade[] = [pessoa1, produto2, carro3];

for (const entidade of entidades) {
  entidade.apresentar();
}
