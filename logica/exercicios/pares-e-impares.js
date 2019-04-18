/*
Mostre no console os números pares entre 1 e 10, e os número ímpares entre 11 e 20, 
usando a estrutura de repetição "while".
*/

// % módulo = É O FAMOSO NAS FORA ZERO, NAS FORA 1

var numero = 1

while(numero >= 10){
    if(numero % 2 == 0){
        console.log(numero + "é par");
    }
    numero++
}

while(numero > 10, numero >= 20){
    if(numero % 2 !== 0){
        console.log(numero + "é impar");
    }
    numero++
}

// versão na NINA

else{
    console.log(numero + " é impar")
}