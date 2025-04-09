class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' ' + ' ja ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (this.ligado) {
            console.log(this.nome + ' ' + ' ja desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Vai chamar class Pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super(nome);  // chama o constructor da classe pai
        this.temWifi = temWifi;
    }

    // Metodos Acessivies so para o tablet 
    ligar() { 
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi() {
        console.log('Oi');
    }

    static criador(nome, temWifi) {
        // return new Tablet(nome, temWifi); mais legivel
        return new Tablet.prototype.constructor(nome, temWifi);
    }
}

// 
const s1 = new Smartphone('Sansung', 'Preto', 'Galaxy S10');
console.log(s1);
const t1 = Tablet.criador('iPad', true);
t1.ligar();
console.log(t1);