//  OPERADORES LÓGICOS

/*
&&      AND     /   E
||      OR      /   OU
!       NOT     /   NÃO
*/

const usuario = 'luizangelo@luiz.com'; //form usuário digitou
const senha = '123456'; //form usuário digitou

const vaiLogar = usuario === 'luizangelo@luiz.com' && senha === '654321';   //false
console.log(vaiLogar);