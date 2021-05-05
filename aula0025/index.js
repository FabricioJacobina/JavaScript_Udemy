const numero = Math.floor(Math.random() * 10 + 1);

if (numero >= 0 && numero <= 5){
    console.log(`O número sorteado foi ${numero} e está entre 1 e 5.`)
} else {
    console.log(`O número sorteado foi ${numero} e está entre 6 e 10.`)
}