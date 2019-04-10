var frases = [
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação. - Dalai Lama",

    "A vida tanto lhe pode dar o melhor como o pior, mas é você quem escolhe aquilo que vai permanecer ou ficar para trás.",

    "Já experimentou acreditar em você? Tente! Você não faz ideia do que é capaz.",

    "Foco, força e fé geram verdadeira motivação para que nada nos faça desistir dos nossos maiores sonhos."
]

function sortearFrases(frases){
    var random = Math.floor(Math.random() * 4);
    document.getElementById('ondeApareceFrase').innerHTML = gifs[random];
};