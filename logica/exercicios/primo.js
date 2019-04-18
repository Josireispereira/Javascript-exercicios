/* 
Crie uma função indique se o número passado por parâmetro é primo ou não. 
Lembrando: todo número primo é apenas divisível por 1 e por ele mesmo.
*/

function primo(numero){
    var divisor = 2;
    while (numero > divisor){
        if(n % divisor == 0){
            return false;
        }
    }

    else{
        divisor++
    }

    return true;
}

/* cógigo bugou! 27 deu true! Porque? não é ++, é --
COM FOR DEU CERTO! */

function primo(x){
    for(var contador = 2; contador < x; contador++){
    if(5 % contador === 0){
        return false;
    }

    return true;

}


