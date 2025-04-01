function recursiva(max) {
    console.log(max);
    if(max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);

console.log('------------------')

function loop(max) {
    for (let i = 0; i <= max; i++) {
        console.log(i);
    }
}

loop(10);

console.log('------------------')

var tentivaDeSenha = 0;

function verificaNumeroDeTentativasDeSenha (num) {
    if(num < 2) {
        console.log(num)
        num++;
        return verificaNumeroDeTentativasDeSenha(num)
    }
}

verificaNumeroDeTentativasDeSenha(tentivaDeSenha);