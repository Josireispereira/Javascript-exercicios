window.addEventListener('DOMContentLoaded', function(event) {

let gifsLesbicos = [
    `<img src="./assets/steven.gif" alt="giflesbico1">`,
    `<img src="./assets/pbandmarcy.gif" alt="giflesbico2">`,
    `<img src="./assets/korra.gif" alt="giflesbico3">`,
]
let lista = [
    `<ul>
    <li>Resultado:</li>
    <li>Ruby e Saphire - Steven Universe</li>
    <li>Princesa Jujuba e Marceline - Adventure Time</li>
    <li>Korra e Asami - Avatar: A Lenda de Korra</li>
    </ul>`
]
const botao = document.querySelector('#btn');
const imgGif = document.querySelector('#lugar-gif');
const resposta = document.querySelector('#lugar-resposta');

botao.addEventListener('click', function() {
    
    imgGif.innerHTML = gifsLesbicos[0];
    setTimeout(function() {
        imgGif.innerHTML = gifsLesbicos[1];
    }, 5500);

    setTimeout(function() {
        imgGif.innerHTML = gifsLesbicos[2];
    }, 9500);

    setTimeout(function() {
        imgGif.innerHTML = lista;
    }, 14000);
    });
});

