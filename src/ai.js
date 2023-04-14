function ai(coords){
    let left = [coords[0], coords[1] - 1]
    let right = [coords[0], coords[1] + 1]
    let check = left
    let attack = player2.playerboard.receiveAttack(check)
    if(attack == "X"){
        check = left
    }
    if(attack != "X"){
        check = right
    }
}