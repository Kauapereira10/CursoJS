function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min= 1;
const max = 50;
let rand = 10;

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

// do...while: O bloco de código é executado pelo menos uma vez, e a condição é verificada após a execução.