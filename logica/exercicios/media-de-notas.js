/*
Crie uma função que receba três notas como parâmetro e retorne a média, 
indicando se a pessoa passou ou se foi reprovada. 
*/

var prova = function(a, b, c) {
    var a;
    var b;
    var c;
    var media = (a + b + c) / 3;

    if (media <= 5){ 
        return "reprovada";
    }

    else {
        return "aprovada";
    }
    }


prova (0, 5, 10)



////// VERSÃO DA RAISSA

// .toFixed(2) está limitando o decimal em até duas casas

function media (a, b, c) {
    var a, b, c;
    var resultado = (a + b + c) / 3;
    console.log("Sua média é igual a " + resultado.toFixed(2))
    
    if (resultado > 5){
        console.log("aprovado")
    }

    else {
        console.log("não aprovado")
}
}