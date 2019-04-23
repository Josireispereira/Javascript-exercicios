// Se a senha estiver correta, ele entra no sistema. Se estiver errada, avisa e pede a senha novamente.
// o único meio de sair do console.log e mostrar no HTML TEM QUE SER UMA FUNÇÃO CHAMADA NO HTML!

function entrar() {
    let senha = '';

    do {
        senha = prompt("Digite sua senha: ");

        if (senha == "dance")
            alert("Entrou no Sistema");
        else {
            alert("Senha incorreta, digite novamente!");
        }
    } while (senha != "dance"); // focando no true!
}
