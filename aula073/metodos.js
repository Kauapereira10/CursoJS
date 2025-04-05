/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// Object.values(obj) → Retorna um array com os valores do objeto
const pessoa = { nome: "Ana", idade: 30, cidade: "São Paulo" };
console.log(Object.values(pessoa)); 
// Saída: ["Ana", 30, "São Paulo"]

console.log('-----------------------');

// Object.entries(obj) → Retorna um array de arrays [chave, valor]
console.log(Object.entries(pessoa)); 
// Saída: [["nome", "Ana"], ["idade", 30], ["cidade", "São Paulo"]]

console.log('-----------------------');

// Object.getOwnPropertyDescriptor(obj, 'prop') → Obtém detalhes sobre uma propriedade
const carro = { marca: "Toyota", modelo: "Corolla" };
console.log(Object.getOwnPropertyDescriptor(carro, "marca"));
/* Saída:
{
  value: "Toyota",
  writable: true,
  enumerable: true,
  configurable: true
}
*/

console.log('-----------------------');

// Object.assign(destino, ...origens) → Copia propriedades de objetos para outro
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); 
// Saída: { a: 1, b: 2 }

console.log('-----------------------');

// Spread Operator { ...obj } → Clona ou mescla objetos de forma simples

// Clonar um objeto:
const original = { nome: "Lucas", idade: 25 };
const clone = { ...original };
console.log(clone); 
// Saída: { nome: "Lucas", idade: 25 }

// Mesclar objetos:
const objA = { x: 10, y: 20 };
const objB = { y: 50, z: 30 };
const resultado = { ...objA, ...objB };
console.log(resultado); 
// Saída: { x: 10, y: 50, z: 30 }  (y foi sobrescrito)

