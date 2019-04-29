a + b

const num1 = document.getElementById('num1').nodeValue;
const num2 = document.getElementById('num2').nodeValue;

// SÃO EQUIVALENTES!

let objeto {
    propriedade1 = valor1,
    propriedade2 = valor2,
}

// se eu definir que a calculadora pegue por exemplo o valor do input

const numeroUm = document.getElementById('num1')
const numeroDois = document.getElementById('num2')
const formulario = document.getElementById('form')
const resultado = document.getElementById('resultado')

function soma(a, b) {
    return a + b
}

formulario.addEventListener('submit', function (chuchu) {
    chuchu.preventDefault();

    const numeroUmValor = parseInt(numeroUm.value)
    const numeroDoisValor = parseInt(numeroDois.value)

    console.log('tipo de numero1', typeof numeroUmValor)
    console.log('tipo de numero2', typeof numeroDoisValor)

    resultado.innerHTML =
        soma(numeroUmValor, numeroDoisValor);
})


let i = 0;
do {
    console.log(i); // 0 1 2 3
    i++; // 1 2 3 4
} while (i < 4) // true true true false
console.log("fora do loop ", i);
