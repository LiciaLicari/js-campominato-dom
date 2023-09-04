console.log("miao");

/*
Consegna
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
*/


// - Ogni cella ha un numero progressivo, da 1 a 100 (Ci saranno quindi 10 caselle per ognuna delle 10 righe)
const bodyEl = document.querySelector("body")
const fieldEl = document.querySelector(".field");
const limit = 100 // numero delle celle

//richiamo il pulsante
const clickButton = document.querySelector('.spawn');

//addeventlistener per farlo funzionare

clickButton.addEventListener('click', function () {
    clickButton.classList.toggle('d-none');
    
    spawnField(fieldEl, limit);
    function spawnField(domEl, limit) {
        //creo il campo

        for (let i = 0; i < limit; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList = "cell";
            cellEl.innerHTML = i + 1;
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

