// const data = new Date();
// const diaSemana = data.getDay();
// let diaSemanaTexto;

// switch (diaSemana){
//     case 0:
//         diaSemanaTexto = 'Domingo';
//     break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//     break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//     break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//     break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//     break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//     break;
//     case 6:
//         diaSemanaTexto = 'Sabado';
//     break;
//     default:
//         diaSemanaTexto = '';
//     break;
// }
// const mes = data.getMonth();
// let mesTexto;

// switch (mes){
//     case 0:
//         mesTexto = 'Janeiro';
//     break;
//     case 1:
//         mesTexto = 'Fevereiro';
//     break;
//     case 2:
//         mesTexto = 'Março';
//     break;
//     case 3:
//         mesTexto = 'Abril';
//     break;
//     case 4:
//         mesTexto = 'Maio';
//     break;
//     case 5:
//         mesTexto = 'Junho';
//     break;
//     case 6:
//         mesTexto = 'Julho';
//     break;
//     case 7:
//         mesTexto = 'Agosto';
//     break;
//     case 8:
//         mesTexto = 'Setembro';
//     break;
//     case 9:
//         mesTexto = 'Outubro';
//     break;
//     case 10:
//         mesTexto = 'Novembro';
//     break;
//     case 11:
//         mesTexto = 'Dezembro';
//     break;
// }
// function zeroAEsquera(num){
//     return num >= 10 ? num : `0${num}`;
// }
// function formataData(data){
//     const diaDaSemana = diaSemanaTexto;
//     const dia = zeroAEsquera(data.getDate());
//     const nomeMes = mesTexto;
//     const ano = zeroAEsquera(data.getFullYear());
//     const hora = zeroAEsquera(data.getHours());
//     const minuto = zeroAEsquera(data.getMinutes());
//     return `${diaSemanaTexto}, ${dia} de ${nomeMes} de ${ano} \n<br> ${hora}:${minuto}`;
// }
// const dataTela = formataData(data);
// const container = document.querySelector('.container h1');
// container.innerHTML = `${dataTela}`;

const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);