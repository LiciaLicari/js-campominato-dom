console.log("miao");

function spawnField(elementDOM, cellNumber) {

    const bombsList = bombGenerator(cellNumber);

    let playerPoints = 0;

    let i = 0;

    while (i < cellNumber) {

        const cellMarkup = `<div class="cell">${i + 1}</div>`;

        const cellDOM = document.createElement('div');

        const cellTag = document.createElement('h1');

        const cellValue = i + 1;

        cellTag.append(cellValue);

        cellDOM.append(cellTag);

        cellDOM.classList.add('cell');
        cellDOM.style.width = `calc( 100% / ${Math.sqrt(cellNumber)})`;
        cellDOM.setAttribute('id',`cell${i}`);
        
        cellTag.classList.add('d-none');

        elementDOM.append(cellDOM);

        i++;
        
        cellDOM.addEventListener('click', function Event () {

            console.log(cellValue);


            if (bombsList.includes(cellValue)) {

                this.classList.add('bg-danger');

                document.getElementById('score').innerHTML = `You lose! You score is: ${playerPoints} points`;

                this.removeEventListener('click', Event );
                

                document.getElementById('gameOver').classList.remove('d-none');
                document.getElementById('gameOver').classList.add('d-block');

                document.querySelector

            } else {

                this.classList.add('bg-safe');

                this.removeEventListener('click', Event);

                ++playerPoints;
                
                document.getElementById('score').innerHTML = playerPoints;

            }

        })
    }

}

    //bomb generator

    function bombGenerator(cellNumber) {

        const bombNumber = 16;
        const bombsList = [];
    
        for (let i = 0; i < bombNumber; i++) {
    
            const bombPosition= Math.floor((Math.random() * cellNumber) + 1);

            if (bombsList.includes(bombPosition) || bombPosition > 100) {
                i--;
            } else {
                bombsList.push(bombPosition);
            }
        }
    
        return bombsList;
    
    }

    //field generator

    document.getElementById('spawnField').addEventListener('submit', function (e) {
        e.preventDefault();

        const fieldEl = document.querySelector('.field');

        const difficultEl = document.getElementById('difficulty_level_select');

        console.log(difficultEl.value);

        // if (difficultEl.value === 'easy') {

        //     spawnField(fieldEl, 100);

        // } else if (difficultEl.value === 'mid') {

        //     spawnField(fieldEl, 81);

        // } else if (difficultEl.value === 'hard') {

        //     spawnField(fieldEl, 49);

        // }


    })



    document.getElementById('reload').addEventListener('click', function () {
        location.reload();
    })
