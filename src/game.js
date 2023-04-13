import {player} from "./player.js"
import {turn} from "./turn.js"

function gameloop(){
    const player1 = player()    
    const player2 = player()
    
    turn(player1, player2, 4)
}

export {gameloop}