// Exemplo simples de objeto

    var pessoa = {
        nome: 'Débora',
        idade: 29,
        aniversario: function(){
            pessoa.idade++; //ou pessoa.idade = pessoa.idade + 1  / - 1
        }
    }

    // Visualizar objeto
    pessoa

    // Visualizar idade
    pessoa.idade

    // Fazer aniversario
    pessoa.aniversario()

    // Conferir idade
    pessoa.idade

// Como reatribuir valores.
pessoa.nome = 'Jani';
pessoa.idade = 99;

