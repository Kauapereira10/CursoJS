const pessoa = {
    nome: 'luiz',
    sobrenome: 'Pereira',
    idade: '19',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
// Atribuição via desestruturação
const { endereco: {rua, numero}, endereco } = pessoa;

console.log(rua, numero);