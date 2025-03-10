// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
// ? :
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);

// opcao mais longa
// if (pontuacaoUSuario >= 1000) {
//     console.log('Usario vip');
// } else {
//     console.log('Usuario normal');
// }