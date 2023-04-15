import {computerturn} from "./computerturn.js"
import {placecomputer} from "./placecomputer.js"
function turn(player1, player2, no_of_ships){
    let attackedCoords = []
    let num = no_of_ships
    let i = 0
    let game = true
    let shipsize = num + 1
    let turn = "placeship1"
    let left = null
    let right = null
    let status = document.getElementById("status")

    Array.from(document.getElementsByClassName("player1")).forEach(element => {
        element.addEventListener("click", () => {
            if(turn == "placeship1" && game){
                if (player1.playerboard.place((element.innerText).split(",").map(Number), shipsize, "player1") == true){
                    if(i == 0){
                        status.innerText = "Place your Submarine"
                    }
                    if(i == 1){
                        status.innerText = "Place your Destroyer"
                    }
                    if(i == 2){
                        status.innerText = "Place your Ship"
                    }
                    i++
                    shipsize--
                }
                if(i == num){
                    turn = "placeship2"
                    status.innerText = "Attack"
                    turn = placecomputer(player2, num)
                    return
                }
            }
        })
    })
    Array.from(document.getElementsByClassName("player2")).forEach(element => {
        element.addEventListener("click", () => {
            if(game && (turn == "player1") && (element.className != "a")){
                let attack = player2.playerboard.receiveAttack((element.innerText).split(",").map(Number))
                if(attack == "X"){
                    element.style.backgroundColor = "red"; 
                    element.setAttribute("class", "a")
                }
                if(attack != "X"){
                    element.style.backgroundColor = "black"; 
                    element.setAttribute("class", "a")
                }
                if(player2.playerboard.gameStatus() == true){
                    console.log("player1 wins")
                    status.innerText = "YOU WIN!"
                    game = false
                    return
                }
                turn = "player2"
                let go = computerturn(player1, attackedCoords, game, left, right)
                if(go != undefined){
                    turn = go[0]
                    left = go[1]
                    right = go[2]
                }
                
            }
        })
    });
}

export {turn}