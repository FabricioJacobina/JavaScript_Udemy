const data = new Date();    //  a, m , d , h , M, s, ms
//const data = new Date('2019-04-20 20:20:59')
//console.log(data.toString());

/*
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês comceça do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuti', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 -> DOMINGO    &&      6 -> SABADO
*/

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
const dataBrasil = formataData(data);
console.log(dataBrasil);