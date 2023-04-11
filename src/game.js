import {player} from "./player.js"


function gameloop(){
    let turn = "player1"
    let game = true
    const player1 = player()    
    const player2 = player()
    player1.playerboard.place([2, 2], 2)
    player2.playerboard.place([2, 3], 3)
    Array.from(document.getElementsByClassName("player1")).forEach(element => {
        element.addEventListener("click", () => {
            if(game && (turn == "player2")){
                element.style.backgroundColor = "black"; 
                if(player1.playerboard.receiveAttack((element.innerText).split(",").map(Number)) == "X"){
                    element.style.backgroundColor = "red"; 
                }
                if(player1.playerboard.gameStatus() == true){
                    console.log("player2 wins")
                    game = false
                    return
                }
                turn = "player1"
            }
        })
    }, {once : true})
    Array.from(document.getElementsByClassName("player2")).forEach(element => {
        element.addEventListener("click", () => {
            if(game && (turn == "player1")){
                element.style.backgroundColor = "black"; 
                if(player2.playerboard.receiveAttack((element.innerText).split(",").map(Number)) == "X"){
                    element.style.backgroundColor = "red"; 
                }
                if(player2.playerboard.gameStatus() == true){
                    console.log("player1 wins")
                    game = false
                    return
                }
                turn = "player2"
            }
        }, {once : true})
    });
}

export {gameloop}