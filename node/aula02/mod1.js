module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} esta falando au ua sua mae`);
    }
};