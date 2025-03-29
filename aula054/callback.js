// Função rand() que gera um número aleatório entre um valor mínimo e máximo
// Essa função é usada para simular atrasos aleatórios em setTimeout
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;  // Gera um número aleatório entre min e max
    return Math.floor(num);  // Arredonda o número para baixo (retorna um inteiro)
}

// Função f1, que simula um processo assíncrono com um tempo aleatório
function f1(callback) {
    setTimeout(function () {  // setTimeout executa a função após um tempo aleatório
        console.log('f1');  // Quando o tempo acaba, imprime 'f1'
        if (callback) callback();  // Se o callback for passado, executa a função callback
    }, rand());  // O tempo de execução é aleatório, gerado pela função rand()
}

// Função f2, que simula outro processo assíncrono
function f2(callback) {
    setTimeout(function () {  // setTimeout executa a função após um tempo aleatório
        console.log('f2');  // Quando o tempo acaba, imprime 'f2'
        if (callback) callback();  // Se o callback for passado, executa a função callback
    }, rand());  // O tempo de execução é aleatório, gerado pela função rand()
}

// Função f3, que simula outro processo assíncrono
function f3(callback) {
    setTimeout(function () {  // setTimeout executa a função após um tempo aleatório
        console.log('f3');  // Quando o tempo acaba, imprime 'f3'
        if (callback) callback();  // Se o callback for passado, executa a função callback
    }, rand());  // O tempo de execução é aleatório, gerado pela função rand()
}

// Inicia o fluxo de execução chamando f1 e passando o callback f1Callback
f1(f1Callback);

// Função callback chamada após f1 terminar sua execução
function f1Callback() {
    f2(f2Callback);  // Quando f1 termina, chama f2 passando o callback f2Callback
}

// Função callback chamada após f2 terminar sua execução
function f2Callback() {
    f3(f3Callback);  // Quando f2 termina, chama f3 passando o callback f3Callback
}

// Função callback chamada após f3 terminar sua execução
function f3Callback() {
    console.log('Olá mundo!');  // Quando f3 termina, imprime 'Olá mundo!' no console
}



// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo!');
//         });
//     });
// });

