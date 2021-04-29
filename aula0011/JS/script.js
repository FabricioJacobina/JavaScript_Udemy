//window.alert('Nossa mensagem');               Alerta
//window.confirm('Deseja realmente apagar?');   Confirmação
//window.prompt('Qual o seu nome?');            Interação com usuário
//let num1 = window.prompt('Digite um número: ');

let num1 = window.prompt('Digite um número:');
let num2 = window.prompt('Digite outro número:');
num1 = parseFloat(num1);
num2 = parseFloat(num2);
const resultado = num1 + num2;
window.alert(`O resultado da soma é ${resultado}`);