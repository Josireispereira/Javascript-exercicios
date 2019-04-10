function desliga(){
    var meuBody = document.getElementById("fundo")

    if(meuBody.style.background == "white"){
        meuBody.style.background = "black"
        document.getElementById("gp1").src="./assets/gamepad-icon2.png"
    }

    else{
        meuBody.style.background = "white"
        document.getElementById("gp1").src="./assets/gamepad-icon.png"
    }
    
}

// var gp1 = 

// var gp2 = function(){
//     document.getElementById
// }