function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = peso / (altura * altura);
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var text;
    var gif;
    var cssclass;
    // console.log("O seu IMC é " + resultado.toFixed(2))


// e definir que resultado = calculoIMC no caso DE VAR!!! QUE É ANTIGO, NO CASO DE LET, ELE FUNFA!

// ou console.log( peso / (altura * altura))

    if(resultado < 18){
        text = "Uma Deusa! 🎶"
        gif = `<img src="https://media.giphy.com/media/34QNNV1UX71jG/giphy.gif" alt="">`
        cssclass = "linha1";

    }

    else if(resultado >= 18 && resultado < 25){
        text = "Uma Louca! 🎶"
        gif = `<img src="https://media.giphy.com/media/PdcTSy3CjZ5M4/giphy.gif" alt="">`
        cssclass = "linha2";
    }

    else if(resultado >= 25 && resultado < 30){
        text ="Uma feiticeira! 🎶"
        gif = `<img src="https://media.giphy.com/media/QzxONYL3xbj6E/giphy.gif" alt="">`
        cssclass = "linha3";

    }

    else if(resultado >= 30 && resultado < 40){
        text = "Ela é demais! 🎶"
        gif = `<img src="https://media.giphy.com/media/anDhBXwgvIa7m/giphy.gif" alt="">`
        cssclass = "linha4";

    }

    else{
       text = ("Meu deus ela é demais! 🎶")
       gif = `<img src="https://media.giphy.com/media/7hW7hXXri33NK/giphy.gif" alt="">`
       cssclass = "linha5";

    }
    
    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
}