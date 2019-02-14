/*
  You may choose to utilize the html and css declarations here, or you may choose to write your own.
  
  Comment out line 13 below and then
  use vanilla javascript to render the box application as seen below into the ".app" div.
  
  todo:
  1. Draw 20px by 20px green square boxes going 5 across and 5 down.
  2. make each box toggle between "green" and "red" color on click.
*/

// let app = document.querySelector('.app');
// // app.innerHTML = '<div class="box green"></div>';

// function createBox(xpos, ypos) {
//   let box = document.createElement('div');
//   box.className = 'box green';
//   box.style.left = xpos + 'px';
//   box.style.top =  ypos + 'px';
//   app.appendChild(box);
  
//   box.addEventListener('click', (e) => {
//     let thisBox = e.target;
//     thisBox.classList.toggle('red');
//     thisBox.classList.toggle('green');
    
//   })
// }

// for (let i = 0; i < 3; i++) {
//   let xpos = i * 20;
//   for (let y = 0; y < 3; y++) {
    //     let ypos = y * 20;
    //     createBox(xpos, ypos);
    //   } 
    // };
    
let app = document.querySelector('.app');
let activePlayer = 0;

function startGame(xpos, ypos) {
    let box = document.createElement('div');
    box.className = 'box green';
    box.style.left = xpos + 'px';
    box.style.top = ypos + 'px';
    app.appendChild(box);
    
    box.addEventListener('click', (e) => {
        let thisBox = e.target;
        if (activePlayer === 1) {
            thisBox.classList.toggle('red');
            thisBox.classList.remove('blue');
            // thisBox.classList.toggle('green');
            nextPlayer();
        } else {
            thisBox.classList.toggle('blue');
            thisBox.classList.remove('red');
            // thisBox.classList.toggle('green');
            nextPlayer();
        };
    });
};

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
};



for (let i = 0; i < 3; i++) {
    let xpos = i * 20;
    for (let y = 0; y < 3; y++) {
        let ypos = y * 20;
        startGame(xpos, ypos);
    }
}