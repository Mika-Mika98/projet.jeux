window.onload = function(){
let randomNumber = Math.floor(Math.random()* 10) + 1;

let devine = document.querySelector('.devine');
let retente = document.querySelector('.retente');
let ob = document.querySelector('.ob');

let submit = document.querySelector('.submit');
let nbdev = document.querySelector('.nbdev');

function checkGuess(){
    let userGuess = Number(nbdev.value);
    if (devine === 1){
        devine.textContent = 'Proposition précédente :';
    }
    devine.textContent += userGuess + '';

    if(userGuess < randomNumber){
        ob.textContent ='trop petit';
    }else if(userGuess > randomNumber) {
        ob.textContent ='trop grand';
    }

    if (userGuess === randomNumber){
        retente.textContent = 'Bravo tu as trouvez le nombre !!';
        ob.textContent = '';
    }else if (devine === 3){
        retente.textContent = "Tu as perdu";
    }else{
        retente.textContent = 'faux';
    }
    }
}
