class Pessoa {
    constructor(nome, sobrenome) {
        this.nome =  nome;
        this.sobrenome = sobrenome;
    }
    //Metodos de instância, que será compartilhado por todos os objetos criados com new Pessoa(...).
    falar() {
        console.log(`${this.nome} está falando.`); 
    }
}

function Pessoa2(nome, sobrenome) {
        this.nome =  nome;
        this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`); 
}

const p1 = new Pessoa ('Kaua', 'Pereira');
const p2 = new Pessoa2 ('Joao', 'Pereira');

console.log(p1);
console.log(p2);