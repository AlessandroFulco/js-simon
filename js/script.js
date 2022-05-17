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
// selezione elemento risultato
const risultato = document.getElementById('risultato');
// selezione elemento punti
const punteggio = document.getElementById('punti');
// selezione elemento numeri stampati su schermo
const numeriGenerati = document.getElementById('richiesti');



//stampare a schermo i 5 numeri generati randomicamente per 5 secondi
const arrayRandNum = getUniqueArray();
for(let i = 0; i < arrayRandNum.length; i++){
    let itemArray = arrayRandNum[i];
    divEl.innerHTML += itemArray + " ";
}
// far scomparire i numeri e far apparire un timer di 30 secondi
// variabile che determina i secondi del timer
const dalay5 = setInterval(
    () => {
        clearInterval(dalay5);
        divEl.innerHTML = "";

        let secondi = 5;

        const timer = setInterval(
            function(){
                divTimerEl.innerHTML = secondi;
                if(secondi === 0){
                    clearInterval(timer);
                } else {
                    secondi--;
                }
                
            }
            
        , 1000);
        const programma = setInterval(
            () => {
                clearInterval(programma);
                // far apparire un prompt per inserire i 5 numeri dall'utente
                const arrayUserNum = [];
                let punti = 0;
                risultato.innerHTML = "i numeri inseriti sono: "; 
                for(let i = 0; i < 5; i++){
                    let inputUser = parseInt(prompt("inserisci un nuumero"));
                    //confrontare i numeri generati dalla funzione con i numeri inseriti dall'utente
                    if(arrayRandNum.includes(inputUser) && !arrayUserNum.includes(inputUser)){
                        arrayUserNum.push(inputUser);
                        punti++;
                        //stampare i quanti/quali numeri ha indovinato l'utente
                        risultato.innerHTML += inputUser + " ";
                    }
                }
                numeriGenerati.innerHTML = "i numeri da indovinare erano: " + arrayRandNum;
                punteggio.innerHTML = "hai indovinato: " + punti + " numeri";
                    
            }
        
        , 7000)
    }
, 5000);

console.log(arrayRandNum);

// funzione generatore di numeri randomici
function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
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

