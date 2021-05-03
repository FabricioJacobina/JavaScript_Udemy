// Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol)
// Referência (mutável) - array, object, function

/*
let a = 'A';
let b = a; //cópia
console.log(a, b);

a = 'Outro valor';
console.log(a, b);
*/

let a = [1, 2, 3];
let b = a;  //Valores passados por referência
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

/*
let a = [1, 2, 3];
let b = [...a]; //cópia
*/
