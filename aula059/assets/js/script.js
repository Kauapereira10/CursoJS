// Função construtiva na Calculadora 
function Criacalculadora() {
    this.btnClear = document.querySelector('.btn-clear');
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clickBotoes(); // Ativa os cliques nos botões
        this.pressionaEnter(); // Ativa a funcionalidade da tecla Enter
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    
    this.clickBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target; // Captura o elemento clicado

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.apagaUm();

            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.btnParaDisplay = el => { this.display.value += el.innerText 
    this.display.focus();
    };

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    this.clearDisplay = () => this.display.value = '';

    this.pressionaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key === "Enter") { // Verifica se a tecla pressionada é Enter
                this.realizaConta(); // Chama a função de cálculo
            }
        });
    };
}

const calculadora = new Criacalculadora();
calculadora.inicia();
