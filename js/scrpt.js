/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire,
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// selezione elemento che conterra i 5 numeri
const divEl = document.getElementById('numeri');
// selezione elemento che conterra il timer di 30 secondi
const divTimerEl = document.getElementById('timer');


// variabile che determina i secondi
const timer = 30;

//stampare a schermo i 5 numeri generati randomicamente per 5 secondi(con una funzione)

// far scomparire i numeri e far apparire un timer di 30 secondi

// far apparire un prompt per inserire i 5 numeri dall'utente

//confrontare i numeri generati dalla funzione con i numeri inseriti dall'utente

//stampare i quanti/quali numeri ha indovinato l'utente




// funzione generatore di numeri randomici
function getRandomNum() {
    let randomNum = Math.floor(Math.random() * (10 + 1)) + 1;
    return randomNum;
}


// funzione che crea un array di numeri unici
function getUniqueArray() {
    let array = [];
    while(array.length < 5){
        let numItem = getRandomNum();
        if(!array.includes(numItem)){
            array.push(numItem);
        }
    }
    return array;
}