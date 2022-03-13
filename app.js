const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possiblesChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possiblesChoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}));


//esta funcion genera la opcion de la computadora 
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possiblesChoices.length

    if(randomNumber === 1){
        computerChoice = 'Piedra'
    }
    
    if(randomNumber === 2){
        computerChoice = 'Papel'
    }
    
    if(randomNumber === 3){
        computerChoice = 'Tijeras'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResult(){
    if(computerChoice === userChoice){
        result = 'Es un empate!!'
    }

    if(computerChoice === 'Piedra' && userChoice === 'Papel'){
        result = 'Ganaste!!'
    }

    
    if(computerChoice === 'Piedra' && userChoice === 'Tijeras'){
        result = 'Perdiste!!'
    }

    
    if(computerChoice === 'Papel' && userChoice === 'Tijeras'){
        result = 'Ganaste!!'
    }

    if(computerChoice === 'Papel' && userChoice === 'Piedra'){
        result = 'Pediste!!'
    }

    if(computerChoice === 'Tijeras' && userChoice === 'Piedra'){
        result = 'Ganaste!!'
    }

    if(computerChoice === 'Tijeras' && userChoice === 'Papel'){
        result = 'Pediste!!'
    }

    resultDisplay.innerHTML = result
}

