/*
Usando a estrutura SWITH, crie uma função que transforme uma cor passada por parâmetro em formato 'string', para o seu equivalente hexadecimal. Crie casos para 4 cores.
Se a cor passada não estiver entre as que você selecionou, mostre a seguinte frase "Não temos o equivalente hexadecimal para [cor]".
*/

function tranformaCor(cor){
    switch(cor){
        case 'YellowGreen':
        console.log("O hexadecimal de " cor + "é #9ACD32")
        break;

        case 'Plum':
        console.log("O hexadecimal de " cor + "é #DDA0DD")
        break;

        case 'Aquamarine':
        console.log("O hexadecimal de " cor + "é  #00e699")
        break;

        case 'LightSalmon':
        console.log("O hexadecimal de " cor + "é ##FFA07A)
        break;

    }
}
 	
 	