const verdadeira = true;

// Let tem escopo de bloco { ... Bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // Criando
var nome2 = 'Luiz';

if (verdadeira){
    let nome = 'Otávio'; //criando
    //console.log(nome, nome2);

    if (verdadeira){
        //let nome = 'Outro nome';
        console.log(nome, nome2);
    }
}