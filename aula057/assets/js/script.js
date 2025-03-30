function criaCalculadora() {
    return {
        // Seleciona o elemento de input onde os números e resultados aparecem
        display: document.querySelector('.display'),
        
        // Seleciona o botão de limpar a tela
        btnClear: document.querySelector('.btn-clear'),

        // Método que executa a conta inserida no display
        realizaConta() {
            let conta = this.display.value; // Obtém o valor digitado no display

            try {
                // Utiliza Function() para evitar os riscos do eval()
                conta = new Function(`return ${conta}`)(); 

                // Verifica se o resultado é um número válido
                if (isNaN(conta) || conta === Infinity) {
                    alert('Conta Inválida'); // Se não for válido, exibe um alerta
                    return;
                }

                this.display.value = conta; // Atualiza o display com o resultado
            } catch (e) {
                alert('Conta Inválida'); // Se houver erro na expressão, exibe alerta
                return;
            }
        },

        // Método para apagar o último caractere digitado no display
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        // Método para limpar completamente o display
        clearDisplay() {
            this.display.value = '';
        },

        // Método que permite executar a conta ao pressionar Enter
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.key === "Enter") { // Verifica se a tecla pressionada é Enter
                    this.realizaConta(); // Chama a função de cálculo
                }
            });
        },

        // Método que inicia os eventos da calculadora
        inicia() {
            this.clickBotoes(); // Ativa os cliques nos botões
            this.pressionaEnter(); // Ativa a funcionalidade da tecla Enter
        },

        // Método que captura os cliques nos botões da calculadora
        clickBotoes() {
            document.addEventListener('click', e => {
                const el = e.target; // Captura o elemento clicado

                if (el.classList.contains('btn-num')) { // Se for um número
                    this.btnParaDisplay(el.innerText); // Adiciona ao display
                }

                if (el.classList.contains('btn-clear')) { // Se for o botão de limpar
                    this.clearDisplay(); // Limpa o display
                }

                if (el.classList.contains('btn-del')) { // Se for o botão de apagar
                    this.apagaUm(); // Apaga o último número
                }

                if (el.classList.contains('btn-eq')) { // Se for o botão de igual
                    this.realizaConta(); // Executa a conta
                }
            });
        },

        // Método que adiciona os números digitados ao display
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

// Cria a calculadora e inicia seus eventos
const calculadora = criaCalculadora();
calculadora.inicia();