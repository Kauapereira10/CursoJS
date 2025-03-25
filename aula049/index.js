// Declaração de função (Function hoisting)
falarOi();
function falarOi () {
    console.log('oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
}
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');// Aponta para o contexto onde foi criada
}
funcaoArrow();
// Dentro de um objeto
const objeto = {
    falar() {
        console.log('Estou falando...');
    }
}
objeto.falar();