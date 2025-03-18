// Seleciona os elementos do DOM que serão utilizados
const inputTarefa = document.querySelector('.input-tarefa'); // Campo de entrada para a tarefa
const btnTarefa = document.querySelector('.btn-tarefa'); // Botão para adicionar a tarefa
const tarefas = document.querySelector('.tarefas'); // Lista onde as tarefas serão exibidas

// Função para criar um novo elemento <li>
function criaLi() {
    const li = document.createElement('li'); // Cria um novo elemento <li>
    return li; // Retorna o elemento <li>
}

// Adiciona um evento de 'keypress' ao campo de entrada
inputTarefa.addEventListener('keypress', function (event) {
    // Verifica se a tecla pressionada é 'Enter' (código 13)
    if (event.keyCode === 13) {
        // Se o campo de entrada estiver vazio, não faz nada
        if (!inputTarefa.value) return;
        // Chama a função para criar a tarefa com o valor do input
        criaTarefa(inputTarefa.value);
    }
});

// Função para limpar o campo de entrada e focar nele
function limpaInput() {
    inputTarefa.value = ''; // Limpa o valor do input
    inputTarefa.focus(); // Foca novamente no campo de entrada
}

// Função para criar um botão de apagar e adicioná-lo ao <li>
function criaBotaoApagar(li) {
    li.innerText += ' '; // Adiciona um espaço após o texto da tarefa
    const botaoApagar = document.createElement('button'); // Cria um novo botão
    botaoApagar.innerText = 'Apagar'; // Define o texto do botão
    // botaoApagar.classList.add('apagar'); // (Comentado) Adiciona uma classe ao botão
    botaoApagar.setAttribute('class', 'apagar'); // Define a classe do botão
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Define um título para o botão
    li.appendChild(botaoApagar); // Adiciona o botão ao <li>
}

// Função para criar uma nova tarefa
function criaTarefa(textoInput) {
    const li = criaLi(); // Cria um novo <li>
    li.innerText = textoInput; // Define o texto do <li> como o valor do input
    tarefas.appendChild(li); // Adiciona o <li> à lista de tarefas
    limpaInput(); // Limpa o campo de entrada
    criaBotaoApagar(li); // Cria o botão de apagar e o adiciona ao <li>
    salvarTarefas(); // Salva as tarefas no localStorage
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; 
    criaTarefa(inputTarefa.value);
});

// Adiciona um evento de 'click' ao documento para lidar com o botão de apagar
document.addEventListener('click', function (event) {
    const el = event.target; // Obtém o elemento que foi clicado

    // Verifica se o elemento clicado tem a classe 'apagar'
    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // Remove o <li> pai do botão
        salvarTarefas(); // Salva as tarefas atualizadas no localStorage
    }
});

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // Seleciona todos os <li> da lista de tarefas
    const listaDeTarefas = []; // Cria um array para armazenar as tarefas

    // Itera sobre cada tarefa
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; // Obtém o texto da tarefa
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Remove a palavra 'Apagar' e espaços em branco
        listaDeTarefas.push(tarefaTexto); // Adiciona o texto da tarefa ao array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array de tarefas em uma string JSON
    localStorage.setItem('tarefas', tarefasJSON); // Salva a string JSON no localStorage
}

// Função para adicionar as tarefas salvas ao carregar a página
function adicionaTarefasSalvas() {
    // Obtém a string de tarefas armazenada no localStorage com a chave 'tarefas'
    const tarefas = localStorage.getItem('tarefas');
    // Converte a string JSON de volta para um array de tarefas
    const listaDeTarefas = JSON.parse(tarefas);

    // Itera sobre cada tarefa na lista de tarefas
    for (let tarefa of listaDeTarefas) {
        // Chama a função criaTarefa para adicionar cada tarefa à lista na página
        criaTarefa(tarefa);
    }
}

// Chama a função para adicionar as tarefas salvas ao carregar a página
adicionaTarefasSalvas();