//  For - Clássico - Estrutura de repetição

// const frutas = ['Maçã', 'Pêra', 'Uva'];
// const novasFrutas = 
// console.log(novasFrutas); // [ 'maçã', 'pêra', 'uva' ]


// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i - index
// for (let i = 10; i <= 50; i++) {
//     const par = i % 2 === 0 ? 'Par' : 'Impar';
//     console.log(i, par);
// }

const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}
