"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entidade = void 0;
// Classe base
class Entidade {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    //acessar atributo privado
    // getnome()  {
    //   return this._nome;
    // }
    // setnome(nome: string){
    //   this._nome = nome;
    // }
    apresentar() {
        console.log(`Olá, eu sou ${this.nome}.`);
    }
}
exports.Entidade = Entidade;
