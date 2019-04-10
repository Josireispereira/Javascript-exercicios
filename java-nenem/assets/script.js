var elogios = [
    "Diva sem defeitos",
    "Não é github, mas é gatinho",
    "Máquina de vencer",
    "Universal",
    "Ícone incompreendido",
    "Responsivo #SQN",
    "Maravilindo",
    "Fada Sensata",
    "Cristal",
    "Maravigold",
    "Zero defeitos",
    "Bombonzinho",
    "Um neném",
    "Um broto"
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}
