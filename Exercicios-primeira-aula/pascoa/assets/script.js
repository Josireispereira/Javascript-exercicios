window.addEventListener('DOMContentLoaded', function () {

    const getpais = document.querySelector('#paises');
    const getcidade = document.querySelector('#cidades');
    const result = document.querySelector('#resultado');
    const esconde = document.querySelector('#invisivel');

    getpais.addEventListener('change', function () {
        esconde.style.display = "none";
        result.innerHTML = "";

        const getvalor = this.value;

        if (getvalor == 'au') {
            result.innerHTML = '🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬';
        }

        else if (getvalor == 'br') {
            esconde.style.display = "flex";

            getcidade.addEventListener('change', function () {

                const getbrasil = this.value;

                if (getbrasil == "sp") {
                    result.innerHTML = `🍬 Minha amiga vai ganhar duas caixas de bombons 🍫`;
                }

                else if (getbrasil == "cs") {
                    result.innerHTML = `🍫 Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco 🍬`;
                }
                
                else if (getbrasil == "pa") {
                    result.innerHTML = `🍬 Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite 🍫`;
                }
            });
        }

        else if (getvalor == 'us') {
            result.innerHTML = '🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫';
        }

        else if (getvalor === 'uk') {
            result.innerHTML = '🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬';
        }

    });

});
