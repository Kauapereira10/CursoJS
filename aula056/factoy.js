// Função fábrica para criar objetos do tipo "Pessoa"
function criaPessoa(nome, sobrenome, a, p) {
    return {
        // Propriedades básicas
        nome,  // Nome da pessoa
        sobrenome,  // Sobrenome da pessoa

        // Getter para retornar o nome completo da pessoa
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter para alterar nome e sobrenome a partir de um nome completo
        set nomeCompleto(valor) {
            valor = valor.split(' ');  // Divide o nome completo em um array de palavras
            this.nome = valor.shift();  // Pega a primeira palavra como nome
            this.sobrenome = valor.join(' ');  // O restante se torna o sobrenome
        },

        // Método que simula a fala da pessoa sobre um assunto
        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        // Propriedades de altura e peso (Obs: "peso" estava escrito errado)
        altura: a,
        peso: p,  // Corrigindo o erro de digitação: antes estava "pleso"

        // Getter para calcular o Índice de Massa Corporal (IMC)
        get imc() {
            const indice = this.peso / (this.altura ** 2);  // Fórmula do IMC: peso / altura²
            return indice.toFixed(2);  // Retorna o valor com 2 casas decimais
        }
    };
}

// Criando três pessoas diferentes com a função fábrica
const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('João', 'Otavio', 1.90, 57);
const p3 = criaPessoa('Kaua', 'Pereira', 1.82, 110);

// Exibindo o IMC de cada pessoa no console
console.log(p1.imc);  // Deve imprimir o IMC de Luiz
console.log(p2.imc);  // Deve imprimir o IMC de João
console.log(p3.imc);  // Deve imprimir o IMC de Kaua
