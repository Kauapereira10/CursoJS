//            0123456789      
const nome = 'luiz otavio';

//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(typeof alunos);
console.log(alunos instanceof Array);

/*
console.log(typeof alunos);
console.log(alunos instanceof Array);
*/ 
// console.log(alunos.slice(0, -2));
// delete alunos[1]; Remove o elemento, mas o indice fica livre
// alunos.shift(); Removendo o primeiro elemento
// alunos.pop(); Removendo o elemento/indice final do meu array
// alunos.unshift('luiza'); Adiciona no começo
// alunos.push('luiza'); Adiciona no fim
// alunos[alunos.length] = 'Luana'; Adiciona no fim
// alunos[3] = 'Luiza'; Adicionando
// alunos[0] = 'Eduardo'; Altera
// console.log(alunos);
// console.log(alunos[0]);

/*
Const com valores mutáveis
CONST descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
*/