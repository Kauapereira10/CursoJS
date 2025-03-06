/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 - Boa noite
If - pode ser usado sozinho
Else if - Sempre que utilizo a palavra else, preciso de um if antes
Else if - Posso ter varios
Else - So posso ter um else na checagem
Else - Podemos usar condições sem else if, utilizando apenas if e else
*/
const hora = 13;

if (hora >= 0 && hora <= 11) { // se acontecer
    console.log(`Bom dia!`);
} else if (hora >= 12 && hora <=17) { // senao
    console.log(`Boa tarde!`);
}else if (hora >= 18 && hora <= 23){
    console.log(`Boa noite!`);
}else {
    console.log('Horario de Brasil Invalido');
}

// 