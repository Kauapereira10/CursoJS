const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otávio';
  falaNome();
}
usaFalaNome();

console.log('----------------------');

const globalVar = "Eu sou global";

function pai() {
    const paiVar = "Eu sou do pai";

    function filho() {
        const filhoVar = "Eu sou do filho";
        console.log(globalVar); // Acessa a variável global
        console.log(paiVar);    // Acessa a variável do pai
        console.log(filhoVar);   // Acessa a variável do filho
    }

    filho();
}

pai();