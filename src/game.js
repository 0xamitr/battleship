import {player} from "./player.js"
import {turn} from "./turn.js"
import {placeships} from "./placeships"

function gameloop(){
    const player1 = player()    
    const player2 = player()
    console.log("hi")
    // player1.playerboard.place([2, 2], 2)
    // player2.playerboard.place([2, 3], 3)
    turn(player1, player2, 2)
}

export {gameloop}