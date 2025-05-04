const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  const geradores = [];

  qtd = Number(qtd);

  if (maiusculas) geradores.push(geraMaiuscula);
  if (minusculas) geradores.push(geraMinuscula);
  if (numeros) geradores.push(geraNumero);
  if (simbolos) geradores.push(geraSimbolo);

  for (let i = 0; i < qtd; i++) {
    const randomFunc = geradores[rand(0, geradores.length)];
    senhaArray.push(randomFunc());
  }

  return senhaArray.join('');
}
