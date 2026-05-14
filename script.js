const boardSquares = document.querySelectorAll('.board__square')
const title = document.querySelector('.board__title')
// This is more time efficient than adding an onlick to each button

 let currentPlayer = 'X'
boardSquares.forEach((square, i)=> {
    square.addEventListener('click',() =>{   // first argument is the event listener(click), 
    // then the second is a callback (() =>{})
        console.log('clicked')
        square.innerHTML = currentPlayer
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'  //The turnary operator makes it switch between players  when clicked.
        checkWin()
        console.log(checkWin)
        title.innerHTML = `${currentPlayer}'s Turn`
    })

})

function checkWin (){
    const  winningStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let i =0 ; i < winningStates.length; ++i){

    }
}

