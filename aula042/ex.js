// Escreva uma função chamada ePaisagem que 
// que recebe dois argumentos, largura e altura 
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.

// function ePaisagem(largura, altura) {
//     return largura > altura ? true : false;
// }

// function ePaisagem(largura, altura) {
//     return largura > altura;
// }

// 
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1000, 1880));