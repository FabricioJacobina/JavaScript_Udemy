const num = Number(prompt('Digite um número'));

if (num % 2 == 0){
    document.body.innerHTML = `Você digitou o número ${num} e ele é PAR`;
} else{
    document.body.innerHTML = `Você digitou o número ${num} e ele é IMPAR`;
}