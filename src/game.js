import {player} from "./player.js"
import {turn} from "./turn.js"

function gameloop(){
    const player1 = player()    
    const player2 = player()
    document.getElementById("status").innerText = `Place your Aircraft Carrier`
    turn(player1, player2, 4)
}

export {gameloop}