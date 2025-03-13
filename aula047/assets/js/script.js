function relogio () {
function getTimeFromSeconds (seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
const relogio = document.querySelector('.relogio');
let seconds = 0;
let timer;

function iniciaRelogio () {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('iniciar')) { //verifica se o elemento clicado possui a classe iniciar.
        clearInterval(timer); // Garante que não haja múltiplos timers rodando ao mesmo tempo
        relogio.classList.remove('pausado');
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0; // Isso garante que, na próxima vez que o relógio for iniciado, ele começará a contar a partir de zero.
    }
});
}
relogio();



// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');



// iniciar.addEventListener('click', function (event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function (event){
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// });

// zerar.addEventListener('click', function (event){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     seconds = 0;
// });
