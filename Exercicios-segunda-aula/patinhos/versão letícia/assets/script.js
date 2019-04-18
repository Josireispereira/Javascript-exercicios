// window.addEventListener('DOMContentLoaded', function(event) {

// let patinhos = ["Adelaide", "Maria eduarda", "Chico", "Junior Jr.", "Fred", "Vitorhugo", "Bentinho", "Nina"];
// const lista = document.querySelector("#lista-nomes");
// const quanti = document.querySelector("#quantidade");

// quanti.innerHTML = patinhos.length;

// patinhos.forEach(function(item, index) {
//     // lista.innerHTML = patinhos;
//     const paragrafos = document.createElement('p');
//     paragrafos.innerHTML = item;
//     lista.appendChild(paragrafos);
//     });
//     // criar uma variável nova, no caso a paragrafos e definir para ela criar um novo elemento no html, o ele p (para colocar cada item em cada linha nova). Depois, falar que essa variável vai pegar os itens do array patinhos e jogar no html. Por último falar que a constante lista (que pega o id da div), e em vez de só mostrar com o inner, você cria novos apendices para aparecer um embaixo do outro e não sobrescrever cada item (paragrafos).
// });

// ---------  DONTPAD.COM/CACHORROSSOVIETICOS

window.addEventListener('DOMContentLoaded', function() {

    const quanti = document.querySelector("#quantidade");

    quanti.innerHTML = patinhos.length;

    let sovietDogs = ['Laika', 'Strelka', 'Belka', 'Mushka', 'Pchyolka', 'Chernushka', 'Zvyozdochka', 'Veterok', 'Ugolyok'];

    let dogList = document.getElementById('dog__list');

    let dogItem;

    sovietDogs.forEach(function(item, index){

        if (dogItem == undefined) {
            dogItem = `<li>${item}</li>`;
        }

        else {
       dogItem += `<li>${item}</li>`;
        }
        
    });

    dogList.innerHTML = dogItem;


});