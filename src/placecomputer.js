function placecomputer(player, num){
    let j = 0
    let shipsize = num + 1
    while(j < num)
    {
        let x = Math.floor(Math.random()*10)
        let y = Math.floor(Math.random()*10)
        let rand_coords = [y, x]
        if((player.playerboard.place((rand_coords), shipsize, "player2")) == true){
            shipsize--
            j++
        }
    }
    return "player1"
}

export {placecomputer}