// IF, ELSE IF && ELSE

/*

*   If pode ser usado sozinho
*   Sempre que utilizo a palavra else, preciso de um if antes
*   Eu posso ter vários else ifs na checagem
*   Só posso ter um else na checagem

*/

const data = new Date();
const hora = data.getHours();
const minuto = data.getMinutes();

if (hora >= 6 && hora <= 12){
    console.log(`Bom Dia! Agora são ${hora}:${minuto}.`);
} else if (hora >= 13 && hora <= 17){
    console.log(`Boa Tarde! Agora são ${hora}:${minuto}.`);
} else if (hora >= 18 && hora <= 23){
    console.log(`Tenha uma boa noite! Agora são ${hora}:${minuto}.`);
} else {
    console.log(`Já é madrugada e agora são ${hora}:${minuto}.`);
}