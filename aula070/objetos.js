// Objetos 
const pessoa1 = new Object();
pessoa1.nome = 'kaua';
pessoa1.sobrenome = 'pereira';
pessoa1.idade = 0;
pessoa1.falarnome = function() {
    return (`${this.nome} nasceu em `);
}
pessoa1.getNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.falarnome(), pessoa1.getNascimento());

for (let chave in pessoa1) {
    console.log(chave);
}

console.log('----------------------------');

// Factory functions / Constructor functions / Classes

// Factory functions
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Pereira');
console.log(p1.nomeCompleto);

console.log('----------------------------');

// Constructor functions 
// Vai criar um Objeto vazio {} para ligar com o this
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome= sobrenome;
    Object.freeze(this) // Travei meu objeto para nao ser alterado
}

const p2 = new Pessoa('Luiz', 'Otavio');
p2.nome = 'outra coisa'; // alterei o valor do objeto dentro da const p2
console.log(p2);