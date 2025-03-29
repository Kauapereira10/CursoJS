// IIFE -> Immediately Invoked Function Expression
(function () {
    // Variável 'sobrenome' definida dentro da função
    const sobrenome = 'Miranda';

    // Função criaNome, que utiliza a variável 'sobrenome' da função externa
    function criaNome(nome) {
        return nome + ' ' + sobrenome;  // Retorna uma concatenação do nome e sobrenome
    }

    // Função falaNome, que chama a função criaNome com 'Luiz' como argumento
    function falaNome() {
        console.log(criaNome('Luiz'));  // Imprime o nome completo (Luiz Miranda)
    }

    // A função falaNome é chamada logo após a definição da IIFE
    falaNome();
})();

/*
* A variável sobrenome é local à IIFE e não pode ser acessada fora dela.
* A IIFE é uma técnica que permite executar uma função imediatamente após sua definição. Ela é útil quando você deseja criar um escopo local para evitar poluição do escopo global, além de ser uma maneira elegante de estruturar e organizar o código em casos onde você não precisa de uma função globalmente acessível.
*/ 