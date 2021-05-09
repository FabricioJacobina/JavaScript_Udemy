//      Switch  /   Case
function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feria';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
//let diaSemanaTexto;

/*
if (diaSemana === 0){
    diaSemana = 'Domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda-feira';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-feira';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta-feira';
} else {
    diaSemanaTexto = 'Sabado';
}
*/


// switch (diaSemana){
//     case 0:
//         diaSemanaTexto = 'Domingo';
//     break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feria';
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
// }

console.log(diaSemanaTexto);
