// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

// Função construtora que recebe o CPF enviado
function ValidaCPF(cpfEnviado) {
    // Define uma propriedade chamada 'cpfLimpo' que remove tudo que não for número
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, // permite que essa propriedade apareça em loops como for...in
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); // remove tudo que não for número
        }
    });
}

// Método que realiza a validação do CPF
ValidaCPF.prototype.valida = function () {
    // Verifica se o cpfLimpo existe
    if (typeof this.cpfLimpo === 'undefined') return false;

    // Verifica se o CPF tem exatamente 11 dígitos
    if (this.cpfLimpo.length !== 11) return false;

    // Verifica se todos os números são iguais (ex: 11111111111)
    if (this.isSequencia()) return false;

    // Pega os 9 primeiros dígitos do CPF
    const cpfParcial = this.cpfLimpo.slice(0, -2);

    // Gera o primeiro dígito verificador
    const digito1 = this.criaDigito(cpfParcial);

    // Gera o segundo dígito verificador com base no parcial + primeiro dígito
    const digito2 = this.criaDigito(cpfParcial + digito1);

    // Junta tudo para formar o CPF completo validado
    const novoCpf = cpfParcial + digito1 + digito2;

    // Compara se o CPF gerado é igual ao original
    return novoCpf === this.cpfLimpo;
};

// Função que cria um dos dígitos verificadores com base no algoritmo do CPF
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial); // Transforma a string em array

    let regressivo = cpfArray.length + 1; // Define o multiplicador regressivo (10 ou 11)

    // Faz o somatório das multiplicações dos dígitos
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val)); // multiplica e soma
        regressivo--; // diminui o multiplicador
        return ac; // retorna o acumulador
    }, 0);

    // Aplica a fórmula para gerar o dígito
    const digito = 11 - (total % 11);

    // Se for maior que 9, retorna '0'. Caso contrário, retorna o próprio dígito
    return digito > 9 ? '0' : String(digito);
};

// Verifica se todos os números do CPF são iguais (o que torna inválido)
ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // repete o primeiro dígito 11 vezes
    return sequencia === this.cpfLimpo; // retorna true se for uma sequência repetida
};

// Função para validar o CPF no HTML (chamada ao clicar no botão)
function validarCPF() {
    // Captura o valor digitado no input do HTML
    const cpfDigitado = document.getElementById('cpfInput').value;

    // Seleciona o elemento onde será exibido o resultado da validação
    const resultado = document.getElementById('resultado');

    // Cria uma nova instância de ValidaCPF com o CPF digitado
    const cpf = new ValidaCPF(cpfDigitado);

    // Verifica se o CPF é válido e exibe a mensagem correspondente
    if (cpf.valida()) {
        resultado.textContent = "✅ CPF válido!";
        resultado.style.color = "green"; // cor verde para válido
    } else {
        resultado.textContent = "❌ CPF inválido.";
        resultado.style.color = "red"; // cor vermelha para inválido
    }
}
