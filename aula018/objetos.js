/* 
const pessoal = {
  nome: 'luiz', 
  sobrenome: 'Miranda',
  idade: 18  
};

console.log(pessoal.nome);
*/

/*
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoal1 = criaPessoa('Luiz', 'Miranda', '18');
const pessoal2 = criaPessoa('Kaua', 'Pereira ', '28');
const pessoal3 = criaPessoa('Ana', 'Beatriz', '48');
const pessoal4 = criaPessoa('Beatriz', 'Borges', '68');
const pessoal5 = criaPessoa('Isabella', 'Aparecida', '58');
console.log(pessoal2.nome);
*/

const pessoa1 = {
  nome: 'luiz', 
  sobrenome: 'Miranda',
  idade: 18,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  },

  incrementaIdade() {
  this.idade++;
  }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();