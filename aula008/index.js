const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80; 
let imc;
let anoNascrimento;

console.log('--------------------');
anoNascrimento = 2025 - idade;
imc = peso / (alturaEmM * alturaEmM);
console.log(imc);
console.log(anoNascrimento);
console.log('--------------------');

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg'); // +
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`); // template strings
console.log(nome, 'nasceu em', anoNascrimento); // com , ''
