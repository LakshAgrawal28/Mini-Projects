// {// document.querySelector('.innerBox')
// // .addEventListener('click', function(e){
// //     console.log(e);
    
// // })
// const winner = document.querySelector('#Winner')
// // console.log(winner);

// function displayWinner(currentPlayer) {
//     console.log(currentPlayer);
//     if(currentPlayer%2 == 0){
//         winner.innerHTML = "X wins"
//     } else {
//         winner.innerHTML = "O wins"
//     }
    
// };

// function checkIfWin(currentPlayer) {
//     const boxes = document.querySelectorAll('.inner');
//     const winPatterns = [
//         [0, 1, 2], // Top row
//         [3, 4, 5], // Middle row
//         [6, 7, 8], // Bottom row
//         [0, 3, 6], // Left column
//         [1, 4, 7], // Middle column
//         [2, 5, 8], // Right column
//         [0, 4, 8], // Diagonal from top-left
//         [2, 4, 6]  // Diagonal from top-right
//     ];

//     const currentSymbol = currentPlayer % 2 === 0 ? "X" : "O";

//     return winPatterns.some(pattern => {
//         return pattern.every(index => boxes[index].innerHTML === currentSymbol);
//     });


// };


// {
// let currentPlayer = 0;
// const boxes = document.querySelectorAll('.inner')
// boxes.forEach(i => {
//     // console.log(i);
//     i.addEventListener('click', function(e){
//         // console.log(e.target);
//         if(currentPlayer%2 == 0){
//             if(e.target.innerHTML == ""){
//                 e.target.innerHTML = "X";
                
//                 if(checkIfWin(currentPlayer)){
//                     displayWinner(currentPlayer)
//                 };
//                 currentPlayer++;
//             } 
//         } else {
//             if(e.target.innerHTML == ""){
//                 e.target.innerHTML = "O";
                
//                 if(checkIfWin(currentPlayer)){
//                     displayWinner(currentPlayer)
//                 };
//                 currentPlayer++;
//             }
            
            
//         }
//         // e.target.innerHTML = "";
//     })
// });
// }
// }




const winner = document.querySelector('#Winner');
let gameOver = false; // 🔥 New flag

function displayWinner(currentPlayer) {
    console.log(currentPlayer);
    if (currentPlayer % 2 == 0) {
        winner.innerHTML = "X wins";
    } else {
        winner.innerHTML = "O wins";
    }
    // gameOver = true; // 🔥 Stop the game
}

function checkIfWin(currentPlayer) {
    const boxes = document.querySelectorAll('.inner');
    const winPatterns = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ];

    const currentSymbol = currentPlayer % 2 === 0 ? "X" : "O";

    return winPatterns.some(pattern => {
        return pattern.every(index => boxes[index].innerHTML === currentSymbol);
    });
}

{
    let currentPlayer = 0;
    const boxes = document.querySelectorAll('.inner');

    boxes.forEach(i => {
        i.addEventListener('click', function (e) {
            if (gameOver) return; // 🔥 If the game is over, ignore clicks

            if (currentPlayer % 2 == 0) {
                if (e.target.innerHTML == "") {
                    e.target.innerHTML = "X";

                    if (checkIfWin(currentPlayer)) {
                        displayWinner(currentPlayer);
                    }
                    currentPlayer++;
                }
            } else {
                if (e.target.innerHTML == "") {
                    e.target.innerHTML = "O";

                    if (checkIfWin(currentPlayer)) {
                        displayWinner(currentPlayer);
                    }
                    currentPlayer++;
                }
            }
        });
    });
}
