function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD Value');
            return;
        }
        
        setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return;
        }, tempo);
    });
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 1000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 5000),
    esperaAi(100, 1000),
    'Outro valor'
];

Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});
