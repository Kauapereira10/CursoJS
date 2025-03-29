// argumentos que sustenta todos os argumentos enviados so para "function"
function funcao() {
    let total = 0; // Começa com 0
    for(let argumento of arguments) { // Percorre cada número em arguments
        total += argumento; // Soma ao total
    }
    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8);

function funcao2 (a, b = b || 0, c = 4){
    // b = b || 0;
    console.log(a + b + c);
}

funcao2(2, null, 20);

// Atribuição via desestruturação 
function funcao3 ([valor1, valor2, valor3]){
    // b = b || 0;
    console.log(valor1, valor2, valor3);
}

funcao3(['luiz Otavio', 'Miranda', 20]);

// operator rest e pode usar qualquer tipo de espressao de função para esse parametro
function conta (operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);
