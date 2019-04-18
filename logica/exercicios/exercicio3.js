// ------------------ metodo é uma função atribuída a um objeto
// ------------------ propriedade = atributo = chave
// ------------------ valor = conteúdo = value


// Declare uma variável que receba um objeto vazio.
var objeto = {};
[] Array;
() if, function;

/*
Declare uma variável `pessoa`, que receba as suas informações pessoais, seguindo os tipos definidos abaixo:
- `nome` - String
- `sobrenome` - String
- `idade` - Number
- `altura` - Number
- `reprograma` - String
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: "Josi",
    sobrenome: "Reis",
    idade: 22,
    altura: 1.69,
    reprograma: "Turma 7",
    andando: false,
    caminhouQuantosMetros: 0,
    // fazerAniversario: function(){}
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function(){
    // pessoa.idade = pessoa.idade + 1;
    console.log("Parabéns pelos " + pessoa.idade++ + " anos!")
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

// pessoa.andar = function(metros){
//     var metros;
//     // parseInt(prompt("Quantos metros?"))
//     // pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + metros;
//     pessoa.caminhouQuantosMetros += metros;
//     pessoa.andando = true;
//     console.log("Você caminhou " + andar + "metros")
// } 


pessoa.andar = function(metros){
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
}

// o parseInt transforma o string padrão do prompt em números (para não concatenar)
// document.write escreve no html
// repli.it - console que te mostra o resultado do html, css e js
// pessoa.andando = true; não é os pontos : por estar dentro de uma function, então você tem que declarar novamente que NAQUELE MOMENTO ele será verdadeiro, mesmo que por padrão de atributo (no pessoa) ele seja falso



/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(){
    pessoa.andando = true;
}

/*
Crie um método chamado `meuNomeCompleto`, que retorne a frase:
- "Meu nome é [NOME] [SOBRENOME]"
*/

pessoa.meuNomeCompleto = function(){
    pessoa.meuNomeCompleto = pessoa.nome + pessoa.sobrenome;
    console.log("Meu nome é " + pessoa.nome + " " + pessoa.sobrenome)
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "eu tenho [IDADE] anos"
*/

pessoa.mostrarIdade = function(){
    console.log("eu tenho " + pessoa.idade + " anos")
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "minha altura é [ALTURA]"
*/

pessoa.mostrarAltura = function(){
    console.log("minha altura é " pessoa.altura)
}

/*
Agora vamos mostrar as informações do objeto criado!
Qual o nome completo da pessoa? 
*/

/*
Qual a idade da pessoa? 
*/

/*
Qual a altura da pessoa?
*/

/*
Faça a `pessoa` fazer 3 aniversários.
*/

/*
Quantos anos a `pessoa` tem agora? 
*/

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

/*
A pessoa ainda está andando? 
*/

/*
Se a pessoa ainda está andando, faça-a parar.
*/

/*
Quantos metros a pessoa andou? 
*/

/*
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá! Meu nome é [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
*/

pessoa.apresentacao = function(){
    console.log("Olá! " + pessoa.meuNomeCompleto() + " " + pessoa.mostrarIdade() + " "+ pessoa.mostrarAltura + " e, só hoje, eu já caminhei " pessoa.caminhouQuantosMetros() "metros!")
}