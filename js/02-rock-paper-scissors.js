
function display() {
    alert(`Lets play Ro-Sha-Bo`)

    alert(`Choose first`)
}


function juego() {
    let choiceOne = ["rock", "paper", "scissors"]
    let opponent = Math.round(Math.random() * 2)
    let choiceTwo = choiceOne[opponent]

   

    choiceOne = String(prompt(`Type your choice("rock", "paper", "scissors")`, `rock`)).toLowerCase()
    
        if ((choiceOne === 'rock' && choiceTwo === 'paper') ||
            (choiceOne === 'paper' && choiceTwo === 'scissors') ||
            (choiceOne === 'scissors' && choiceTwo === 'rock')) {
            alert(`You lost! ${choiceTwo} beats ${choiceOne}.`)
        } else if (choiceOne === choiceTwo) {
            alert(`It's a tie! Both chose ${choiceOne}.`)
        } else if ((choiceOne === 'rock' && choiceTwo === 'scissors') ||
            (choiceOne === 'paper' && choiceTwo === 'rock') ||
            (choiceOne === 'scissors' && choiceTwo === 'paper')) {
            alert(`You won! ${choiceOne} beats ${choiceTwo}.`)
        } else {
            alert(`Invalid choice, please enter "rock", "paper", or "scissors".`)
        juego()
        return
        }
    
}

function unoMas(){
    display()
    let playAgain = 'y'
    while (playAgain === 'y'){
        juego()
        playAgain = prompt(`Do you want to play again? (y or n)`,'y')

    }
    alert(`Thanks for playing`)
}

unoMas()