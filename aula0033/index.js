const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
//const {nome, sobrenome, idade: yearOld} = pessoa;
const {nome, ...resto} = pessoa;
const {endereco: {rua, numero}} = pessoa;
console.log(resto);
console.log(`${rua}\nNúmero: ${numero}`);