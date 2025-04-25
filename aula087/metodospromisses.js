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

// Promise.all / Promise.race / Promise.resolve / Promise.reject

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a pagina', 2500);
    }
}

const p1 = baixaPagina();
const p2 = esperaAi('Fazendo algo mais', 3000);
const p3 = esperaAi('Outro processo', 1500);

Promise.all([p1, p2, p3])
    .then(results => {
        console.log('Todas as promessas resolvidas: ', results);
    })
    .catch(err => {
        console.log('Erro com uma das promessas (Promise.all): ', err);
    });

Promise.race([p1, p2, p3])
    .then(result => {
        console.log('A primeira promessa resolvida: ', result);
    })
    .catch(err => {
        console.log('Erro na primeira promessa (Promise.race): ', err);
    });
