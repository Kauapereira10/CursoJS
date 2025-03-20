// return - retorna um valor e termina a função
function criaPessoa (nome, sobrenome) {
    return {
        nome, sobrenome
    };
}

console.log('-------------------------------');

const p1 = criaPessoa('luiz', 'otavio');
const p2 = {
    nome: 'Kaua',
    sobrenome: 'Pereira'
};
console.log(p1);
console.log(p2);

console.log('-------------------------------');

function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('ola');
console.log(olaMundo('mundo!'));

console.log('-------------------------------');

function criaMultiplicador (multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador;
    };
    // function multiplicacao (n) {
    //     return n * multiplicador;
    // }
    // return multiplicacao();
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));