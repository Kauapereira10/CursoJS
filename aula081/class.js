class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Getter: permite acessar como se fosse uma propriedade
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    // Setter: permite alterar o nome completo como se fosse uma propriedade
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift(); // pega o primeiro nome
        this.sobrenome = valor.join(' '); // o restante vira sobrenome
    }
}


const p1 = new Pessoa('Luiz', 'Miranda');

// Aqui você usa o setter
p1.nomeCompleto = 'Luiz Miranda Olibeira';

console.log(p1.nome); // Luiz
console.log(p1.sobrenome); // Miranda Olibeira