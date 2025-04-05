// defineProperty - defineProperties 
// defineProperty
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar trye or false
        configurable: false // nao configuravel
    });
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 10;
delete p1.estoque;
console.log(p1);

console.log('-----------------------')

// DefineProperties

function Produto2(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar trye or false
            configurable: true // nao configuravel
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar trye or false
            configurable: true // nao configuravel
        },
        estoque: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: false, // pode alterar trye or false
            configurable: true // nao configuravel
        }
    });
}

const p2 = new Produto2('Camiseta', 20, 3);
console.log(p2);