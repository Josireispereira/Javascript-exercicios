// Se a senha estiver correta, ele entra no sistema. Se estiver errada, avisa e pede a senha novamente.

/* LOGICAAAA
a senha é = xyz
faça:
se ele digitou senha no input, clicou no OK
e ERROU
alerte o usuário: 
"hey, qual é a senha?" e repete no começo

caso acerte, 
alerte que acertou e acaba*/

// FARINHA let senha = prompt('digite sua senha')

// let input = document.getElementById("senha").value;
// let btn = document.getElementById("botao");
// const result = document.getElementById("result");

let senhaUsuario = prompt("Digite sua senha"); // isso é a lebal, criar um input que vai guardar valor
const senha = "dance"; //ele não vai pedir de novo automaticamente 

do {    
    if(senhaUsuario == senha){
        alert("Senha correta!!!!");
    }

    else {
        alert("Senha incorreta, digite novamente!");
        senhaUsuario = prompt("Digite sua senha");
    }

} while (senhaUsuario != senha); // ele devolve no automatico, dessa forma, não é automatico!
// focando no true!
