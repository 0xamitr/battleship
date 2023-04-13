function placecomputer(player, num){
    let j = 0
    
    while(j < 2)
    {
        let x = Math.floor(Math.random()*10)
        let y = Math.floor(Math.random()*10)
        let rand_coords = [y, x]
        if((player.playerboard.place((rand_coords), num + 1, "player2")) == true){
            console.log("hii")
            j++
        }
    }
    return "player1"
}

export {placecomputer}