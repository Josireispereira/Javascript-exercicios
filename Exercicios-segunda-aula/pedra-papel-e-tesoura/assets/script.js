window.addEventListener('DOMContentLoaded', function (event) {

    const listaJogo = ["pedra", "papel", "tesoura", "lagarto", "spock"];
    const resultado = document.querySelector("#resposta");
    const listaHtml = document.querySelector("#lista-jogo");

    listaHtml.addEventListener('change', function () {

        const usuario = this.value;
        const computador = listaJogo[Math.floor(Math.random() * listaJogo.length)];
        console.log(computador);
        // let random = Math.floor(Math.random()*listaJogo.length);
        // computador = listaJogo[random]

        switch (usuario) {
            case listaJogo[0]: // pedra
                if (usuario == computador) {
                    alert("Empateeeeeee!");
                }
                else if (computador == listaJogo[2] || computador == listaJogo[3]) {
                    alert("Você ganhou!!!!");
                    console.log(`O computador escolheu ${computador} e perdeu, você escolheu ${usuario} e ganhou`);

                }
                else {
                    console.log(`O computador escolheu ${computador} e ganhou, você escolheu ${usuario} e perdeu`);
                    alert("Você perdeu!!!");
                }
                break; //fim da 1a comparação

            case listaJogo[1]: // papel
                if (usuario == computador) {
                    alert("Empateeeeeee!");
                }
                else if (computador == listaJogo[0] || computador == listaJogo[4]) {
                    alert("Você ganhou!!!!");
                }
                else {
                    alert("Você perdeu!!!");
                }
                break; //fim da 2a comparação

                
            default:
                break;
        }

    });

});