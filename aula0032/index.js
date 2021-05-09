//  Atribuição via desestruturação

// let a = 'A';    //B
// let b = 'B';    //C
// let c = 'C';    //A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero, ...resto] = numeros;
//console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero);
// console.log(resto);


//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(numeros[1][2]);
//const [, [, , seis], ,] = numeros;
const[lista1, lista2, lista3] = numeros;
console.log(lista2[2]);