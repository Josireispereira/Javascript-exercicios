/* 
Crie uma função que converta o número do mês do ano pelo seu nome. Por exemplo, o mês 7 é o mês julho.
*/

function mesesDoAno(){
    switch(mes){
        case 1:
        console.log("Janeiro");
        break;

        case 2:
        console.log("Feveiro");
        break;

        case 3:
        console.log("Março");
        break;

        case 4:
        console.log("Abril");
        break;

        case 5:
        console.log("Maio");

        case 6:
        console.log("Junho");
        break;

        case 7:
        console.log("Julho");

        case 8:
        console.log("Agosto");
        break;

        case 9:
        console.log("Setembro");
        break;

        case 10:
        console.log("Outubro");
        break;

        case 11:
        console.log("Novembro");
        break;

        case 12:
        console.log("Dezembro");
        break;

        default:
        console.log("Escolha um número de 1 a 12")
    }
}

// o default é como se fosse o return dos ifs e elses