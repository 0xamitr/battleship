function computerturn(player, attackedCoords, game){
    let rand_coords
    do {
        let y = Math.floor(Math.random()*10)
        let x = Math.floor(Math.random()*10)
        rand_coords = [y,x]
    } while (attackedCoords.some(coords => coords[0] === rand_coords[0] && coords[1] === rand_coords[1]))

    attackedCoords.push(rand_coords)
    let element = document.getElementsByClassName(rand_coords)[0]
    
    // // check if the element has already been attacked
    // if (element.classList.contains('a')) {
    //     return computerturn(player, attackedCoords, game);
    // }
    let attack = player.playerboard.receiveAttack(rand_coords)
    if(attack == "X"){
        element.style.backgroundColor = "red"; 
    }
    if(attack != "X"){
        element.style.backgroundColor = "black"; 
    }
    if(player.playerboard.gameStatus() == true){
        console.log("player2 wins")
        game = false
        return
    }
    return "player1"
}

export {computerturn}
