
let cards=[]
let sum = 0
let blackJack = false
let isAlive = true
let message = ""
let messeageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

    //   player id
let player ={
    playerMoney : 145 , 
    playerName : "hamsa"
}

playerid = document.getElementById("player-el")
playerid.textContent = player.playerName + ":  &" + player.playerMoney




            // get card
function getrandomnumber(){
    let randomnumber = Math.floor(  1 + Math.random() * 13)
    if (randomnumber > 10){
        return 10
    }
    else if (randomnumber === 1){
        return 11
    }
    else {
        return randomnumber
    }

}
 
               //  starting game


function start(){
    isAlive = true
    let firstCard = getrandomnumber()
    let secondCard = getrandomnumber()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    render()
}


            //   render the game
function render(){
 cardsEl.textContent = "card: " 
 for(let i=0; i<cards.length ; i++){
    cardsEl.textContent +=cards[i] + " "
 }
 sumEl.textContent = "sum: " + sum

if (sum <=20) {
    isAlive = true
    message= "wanna more card"
}
 else if (sum === 21) {
    isAlive = true
    message=  "you win"
    blackJack = true
}
else {
    isAlive = false
    message= "you lose"
}
messeageEl.innerText = message


}

        //    new card

function newcard(){
  
if (isAlive=== true && blackJack===false){
       let thirdCard =  getrandomnumber()
    cards.push(thirdCard)
    sum = sum + cards[2]
    console.log(cards)
    sumEl.textContent = "sum: " +sum
    render() 
}
}












 
