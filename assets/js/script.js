console.log("miao");

//variabili per le opzioni di gioco
const selectMatchEl = document.getElementById('difficulty_level_select');
const easyMatchEl = document.getElementById('easy');
const midMatchEl = document.getElementById('mid');
const hardMatchEl = document.getElementById('hard');
console.log(selectMatchEl, easyMatchEl, midMatchEl, hardMatchEl);

/*
Consegna
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
*/


// - Ogni cella ha un numero progressivo, da 1 a 100 (Ci saranno quindi 10 caselle per ognuna delle 10 righe)
const bodyEl = document.querySelector("body");
const fieldEl = document.querySelector(".field");
const limit = 100; // numero delle celle
const midLimit = 81;
const hardLimit = 49;

//richiamo il pulsante
const clickButton = document.querySelector('.spawn');

//condizione a seconda del livello scelto



if (easyMatchEl) {

    
    clickButton.addEventListener('click', function () {
        clickButton.classList.toggle('d-none');
        
        spawnField(fieldEl, limit);
        function spawnField(domEl, limit) {
            //creo il campo
    
            for (let i = 0; i <= limit; i++) {
                const cellEl = document.createElement("div");
                cellEl.classList = "cell";
                cellEl.innerHTML = i;
                fieldEl.append(cellEl);
    
                //- emetto un messaggio in console con il numero della cella cliccata.
                cellEl.addEventListener("click", function () {
                    console.log("Click on cell: ", cellEl);
                    // - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
                    cellEl.classList.add("bg-sky");
                })
    
    
            }
    
        }
    })

} else if (midMatchEl) {

    clickButton.addEventListener('click', function () {
        clickButton.classList.toggle('d-none');
        
        spawnField(fieldEl, midLimit);
        function spawnField(domEl, midLimit) {
            //creo il campo
    
            for (let i = 0; i <= midLimit; i++) {
                const cellMid_El = document.createElement("div");
                cellMid_El.classList = "cell_mid";
                cellMid_El.innerHTML = i;
                fieldEl.append(cellMid_El);
    
                //- emetto un messaggio in console con il numero della cella cliccata.
                cellMid_El.addEventListener("click", function () {
                    console.log("Click on cell: ", cellMid_El);
                    // - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
                    cellMid_El.classList.add("bg-sky");
                })
    
    
            }
    
        }
    })

} else { //hardMAtch

    clickButton.addEventListener('click', function () {
        clickButton.classList.toggle('d-none');
        
        spawnField(fieldEl, hardLimit);
        function spawnField(domEl, hardLimit) {
            //creo il campo
    
            for (let i = 0; i <= hardLimit; i++) {
                const cellHard_El = document.createElement("div");
                cellHard_El.classList = "cell_hard";
                cellHard_El.innerHTML = i;
                fieldEl.append(cellHard_El);
    
                //- emetto un messaggio in console con il numero della cella cliccata.
                cellHard_El.addEventListener("click", function () {
                    console.log("Click on cell: ", cellHard_El);
                    // - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
                    cellHard_El.classList.add("bg-sky");
                })
    
    
            }
    
        }
    })
}


   



/* 
Consegna

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:
 le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, 
 perciò nell’array delle bombe non potranno esserci due numeri uguali.

- In seguito l'utente clicca su una cella: 
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a 
cliccare sulle altre celle.

- La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo
 possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
l’utente ha cliccato su una cella che non era una bomba.
BONUS:

- Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:

- difficoltà 1 easy ⇒ 100 caselle, con un numero compreso tra 1 e 100, 
divise in 10 caselle per 10 righe;

- difficoltà 2 med ⇒ 81 caselle, con un numero compreso tra 1 e 81, 
divise in 9 caselle per 9 righe;

- difficoltà 3 hard ⇒ 49 caselle, con un numero compreso tra 1 e 49, 
divise in 7 caselle per 7 righe;

Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, 
dividiamo il lavoro in micro problemi.
pensiamo a queli strumenti ci servono, ad esempio: 
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Eventuali validazioni e i controlli possiamo farli anche in un secondo momento.
Io sono a vs disposizione via Tickets fino alle 13. Mi raccomando, 
non sprecate quest'ora e mezza di lavoro ma iniziate subito a lavorare.

*/
