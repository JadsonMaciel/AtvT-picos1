var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe base
var Entidade = /** @class */ (function () {
    function Entidade(nome) {
        this._nome = nome;
    }
    Object.defineProperty(Entidade.prototype, "nome", {
        // Getter for nome
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    // Getter for nome
    Entidade.prototype.getnome = function () {
        return this._nome;
    };
    Entidade.prototype.setnome = function (nome) {
        this._nome = nome;
    };
    // Polymorphic method
    Entidade.prototype.apresentar = function () {
        console.log("Ol\u00E1, eu sou ".concat(this.nome, "."));
    };
    return Entidade;
}());
// Classe 1 - Pessoa
var Pessoa = /** @class */ (function (_super) {
    __extends(Pessoa, _super);
    function Pessoa(nome, idade, cidade) {
        var _this = _super.call(this, nome) || this;
        _this._idade = idade;
        _this._cidade = cidade;
        return _this;
    }
    // Overriding the apresentar method with polymorphism
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, eu sou ".concat(this.nome, ", tenho ").concat(this._idade, " anos e moro em ").concat(this._cidade, "."));
    };
    return Pessoa;
}(Entidade));
// Classe 2 - Produto
var Produto = /** @class */ (function (_super) {
    __extends(Produto, _super);
    function Produto(nome, preco, categoria) {
        var _this = _super.call(this, nome) || this;
        _this._preco = preco;
        _this._categoria = categoria;
        return _this;
    }
    // Overriding the apresentar method with polymorphism
    Produto.prototype.apresentar = function () {
        console.log("Produto: ".concat(this.nome, ", Pre\u00E7o: R$").concat(this._preco.toFixed(2), ", Categoria: ").concat(this._categoria, "."));
    };
    return Produto;
}(Entidade));
// Classe 3 - Carro
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(nome, ano, cor) {
        var _this = _super.call(this, nome) || this;
        _this._ano = ano;
        _this._cor = cor;
        return _this;
    }
    // Overriding the apresentar method with polymorphism
    Carro.prototype.apresentar = function () {
        console.log("".concat(this.nome, " \u00E9 um carro fabricado em ").concat(this._ano, " e tem a cor ").concat(this._cor, "."));
    };
    // New method specific to Carro
    Carro.prototype.ligar = function () {
        console.log("".concat(this.nome, " est\u00E1 ligado."));
    };
    return Carro;
}(Entidade));
// Criar objetos para cada classe
var pessoa1 = new Pessoa("João", 25, "São Paulo");
var produto2 = new Produto("Livro", 30, "Cultura");
var carro3 = new Carro("Corolla", 2020, "Preto");
// Interagindo com os objetos usando polimorfismo
var entidades = [pessoa1, produto2, carro3];
for (var _i = 0, entidades_1 = entidades; _i < entidades_1.length; _i++) {
    var entidade = entidades_1[_i];
    entidade.apresentar();
}
