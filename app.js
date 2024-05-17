const cardArray = [

    {
    name: "fries",
    img:  "memory-img/fries.png",

},

{
    name: "cheeseburger",
    img:  "memory-img/cheeseburger.png",
},

{
    name: "hotdog",
    img:  "memory-img/hotdog.png",
},

{
    name: "ice-cream",
    img:  "memory-img/ice-cream.png",
},

{
    name: "milkshake",
    img:  "memory-img/milkshake.png",
},

{
    name: "pizza",
    img:  "memory-img/pizza.png",
},

// copy the 6 arry and paste 

{
    name: "fries",
    img:  "memory-img/fries.png",

},

{
    name: "cheeseburger",
    img:  "memory-img/cheeseburger.png",
},

{
    name: "hotdog",
    img:  "memory-img/hotdog.png",
},

{
    name: "ice-cream",
    img:  "memory-img/ice-cream.png",
},

{
    name: "milkshake",
    img:  "memory-img/milkshake.png",
},

{
    name: "pizza",
    img:  "memory-img/pizza.png",
},

]

// console.log(cardArray)

cardArray.sort(() => 0.5 - Math.random())  // for the random array
// console.log(cardArray)


const gridDisplay = document.querySelector("#grid")  //we got the grid
// console.log(gridDisplay) 

const resultDisplay = document.querySelector("#result")

let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []



function createBoard() {
    for(let i=0; i < cardArray.length; i++){
        const card = document.createElement("img")
        // console.log(card, i)
        card.setAttribute("src", "memory-img/blank.png")
        card.setAttribute("data-id", i)

        card.addEventListener("click", flipCard)

        // console.log(card, i)

        gridDisplay.appendChild(card)
    }
}

createBoard();


function checkMatch() {
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log("check for Match!")

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "memory-img/blank.png" )
        cards[optionTwoId].setAttribute("src", "memory-img/blank.png" )
    alert("You has clicked the same image!")

    }


    if(cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!")
        cards[optionOneId].setAttribute("src", "memory-img/white.png" )
        cards[optionTwoId].setAttribute("src", "memory-img/white.png" )
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)

        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "memory-img/blank.png" )
        cards[optionTwoId].setAttribute("src", "memory-img/blank.png" )
        alert("sorry try again!")
 
    }

    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratulations you found them all!"
    }

}

function flipCard() {
    console.log(cardArray)
    // console.log("click")
   const cardId = this.getAttribute("data-id")
    // console.log("click", cardId)

    // console.log(cardArray[cardId].name)

    cardsChosen.push(cardArray[cardId].name)
    console.log(cardsChosen);


    cardsChosenIds.push(cardId);
    console.log(cardsChosenIds)

    this.setAttribute("src",cardArray[cardId].img)

    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}



