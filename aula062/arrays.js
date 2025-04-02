// Criando Arrays
const nomes1 = new Array('Eduardo', 'Maria', 'Joana'); // Usando o construtor
console.log(nomes1);

const nomes2 = ['Eduardo', 'Maria', 'Joana']; // Forma literal
console.log(nomes2);

// Copiando Arrays por referência
const novo1 = [...nomes2]; // Criando um novo array sem referência direta
console.log(novo1);

// Removendo o primeiro elemento do array
const removido = nomes2.shift(); // Remove e retorna o primeiro elemento
console.log(removido); // Mostra o elemento removido
console.log(nomes2);

// Criando um novo array com fatia do original
const novo2 = nomes2.slice(1, 3); // Pega os elementos do índice 1 ao 2
console.log(novo2);

const novo3 = nomes2.slice(0, -1); // Remove o último elemento
console.log(novo3);

// Convertendo string em array
const nomeCompleto = 'Luiz Otavio Miranda';
const nomes3 = nomeCompleto.split(' '); // Divide a string em um array
console.log(nomes3);

// Modificando elementos do array
nomes3[2] = 'Joao'; // Altera o terceiro elemento
console.log(nomes3);

// Removendo elementos
delete nomes3[1]; // Remove o segundo elemento sem reordenar
console.log(nomes3);

nomes3.pop(); // Remove o último elemento
console.log(nomes3);

nomes3.shift(); // Remove o primeiro elemento
console.log(nomes3);

// Obtendo o tamanho do array
console.log(nomes3.length); // Exibe o número de elementos no array

// Adicionando elementos
nomes3.push('Kaua'); // Adiciona no final
console.log(nomes3);

nomes3.unshift('Joao'); // Adiciona no início
console.log(nomes3);

// Convertendo array em string
const nomesStr = nomes2.join(' '); // Junta os elementos em uma string separada por espaço
console.log(nomesStr);
