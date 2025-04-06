function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEvento (event) {
        event.preventDefault(); // evita que a página recarregue

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Se a condição for verdadeira (ou seja, se pelo menos um dos campos estiver vazio), o código dentro do bloco if será executado.
        if (!nome.value || !sobrenome.value || !peso.value || !altura.value) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);

        // Limpar os campos do formulário
        nome.value = '';
        sobrenome.value = '';
        peso.value = '';
        altura.value = '';


        // Exibir todos os resultados
        resultado.innerHTML = pessoas.map(pessoa => 
            `<p>${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.peso} kg com ${pessoa.altura} m.</p>`
        ).join('');
    }

    form.addEventListener('submit', recebeEvento);
    
}
meuEscopo();

