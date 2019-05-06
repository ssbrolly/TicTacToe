    
// let app = document.querySelector('.app');
// let activePlayer = 0;

// function startGame(xpos, ypos) {
//     let box = document.createElement('div');
//     box.className = 'box green';
//     box.style.left = xpos + 'px';
//     box.style.top = ypos + 'px';
//     app.appendChild(box);
    
//     box.addEventListener('click', (e) => {
//         let thisBox = e.target;
//         if (activePlayer === 1) {
//             thisBox.classList.toggle('red');
//             thisBox.classList.remove('blue');
//             // thisBox.classList.toggle('green');
//             nextPlayer();
//         } else if (activePlayer === 0) {
//             thisBox.classList.toggle('blue');
//             thisBox.classList.remove('red');
//             // thisBox.classList.toggle('green');
//             nextPlayer();
//         };
//     });
// };

// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
// };



// for (let i = 0; i < 3; i++) {
//     let xpos = i * 20;
//     for (let y = 0; y < 3; y++) {
//         let ypos = y * 20;
//         startGame(xpos, ypos);
//     };
// };


