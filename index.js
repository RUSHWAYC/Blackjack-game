let gameStarted = false
let hasBlackjack = false
let cards = document.getElementById("cards")
let cardsSum = document.getElementById("cardsSum")
let newCardBtn = document.getElementById("newCard")
let drawnCards = []
let sum
let dealer = document.getElementById("dealer")
dealer.textContent = "Wanna play a game? Take a seat!"
let dealerText

function drawRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    if (gameStarted === false) {
        gameStarted = true
        newCardBtn.style.removeProperty("display")
        cardOne = drawRandomCard()
        cardTwo = drawRandomCard()
        drawnCards = [cardOne, cardTwo]
        sum = cardOne + cardTwo
        renderGame()
    } else {
        dealer.textContent = "How bout we finish this hand first?"
    }
    
}

function renderGame() {
    cards.textContent = "Cards: "

    for (i=0; i<drawnCards.length; i++) {
        cards.textContent += drawnCards[i] + " "
    }

    cardsSum.textContent = "Sum: " + sum

    if (sum < 21) {
        dealerText = "Want to draw another card?"
    } else if (sum === 21) {
        dealerText = "Congrats you got blackjack!"
        hasBlackjack = true
        gameStarted = false
        newCardBtn.style.display="none"
    } else {
        dealerText = "Tough luck, you lost."
        gameStarted = false
        newCardBtn.style.display="none"
    }

    dealer.textContent = dealerText
}

function drawCard() {
    if (hasBlackjack === false && gameStarted === true) {
        let newCard = drawRandomCard()
        sum += newCard
        drawnCards.push(newCard)
        renderGame()
    }
}