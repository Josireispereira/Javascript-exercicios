// Crie uma função para converter bitcoin em reais, dada uma quantia e uma cotação.
// Dada uma quantia e uma cotação.
// esse barra barra é comentário de uma linha só, fora o /* */ que escreve infinitamente.

var conversao = function(){
    var bitcoin = prompt("quantos bitcoins você quer converter");
    var cotacao = prompt("quantos reais vale 1 (um) bitcoin hoje");

    var resultado = bitcoin * cotacao;
    alert("você teria " + resultado);
}