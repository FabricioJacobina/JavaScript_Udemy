//  OPERAÇÃO TERNÁRIA   ?   :

const pontuacaoUsuario = 999;

/*
if (pontuacaoUsuario <= 999){
    console.log(`Usuário normal`);
} else {
    console.log(`Usuário VIP`);
}
*/
//                                   Condição / Valor Verdadeiro / Valor falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';

console.log(nivelUsuario);