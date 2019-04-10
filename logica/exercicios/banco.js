/*
Crie um objeto que simule uma conta corrente, com as seguintes chaves: nome, agencia, conta e saldo.
Depois, crie funções para depositar dinheiro, remover dinheiro, consultar saldo da conta e mostrar todos os dados da conta;
*/

var conta = {
    nome: "josi",
    agência: "1616",
    conta: "0004",
    saldo: 16,
}
var valor; // como é uma variável, ela pode ser declarada fora das funções, mas com let isso dá erro, é dentro de cada uma!

var depositarDinheiros = function(valor){
    var valor;
    conta.saldo = conta.saldo + valor;
    return conta.saldo;
}
var gastarDinheiros = function(valor){
    var valor;
    conta.saldo = conta.saldo - valor;
    return conta.saldo;
}
var consultarDinheiros = function(){
    console.log("SALDO de " + conta.saldo);
}

//ou return ("SALDO de" + conta.saldo) ou ("SALDO de ", conta.saldo)
// decremento ou incremento: em vez de conta = caonta + saldo, fazer conta+= saldo