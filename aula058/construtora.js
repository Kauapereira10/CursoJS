// Funçao construtora -> objetos
// 
// 
function Pessoa(nome, sobrenome) {
    // Atibutos ou métodos Privados
    const ID = 123456;
    const metodoIntereno = function() {

    };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' ' + this.sobrenome + ': sou um método');
    };
}

const p1 = new Pessoa('luiz', 'Otavio');
const p2 = new Pessoa('Kaua', 'Pereira');

p2.metodo();