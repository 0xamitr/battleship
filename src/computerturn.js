function computerturn(player, attackedCoords, game, left, right){
    let rand_coords
    console.log(left)
    console.log(right)
    let status = document.getElementById("status")
    if(left == null && right == null){
        do {
            let y = Math.floor(Math.random()*10)
            let x = Math.floor(Math.random()*10)
            
            rand_coords = [y,x]
        } while (attackedCoords.some(coords => coords[0] === rand_coords[0] && coords[1] === rand_coords[1]))
        attackedCoords.push(rand_coords)

        let element = document.getElementsByClassName(rand_coords)[0]
        let attack = player.playerboard.receiveAttack(rand_coords)
        if(attack == "X"){
            element.style.backgroundColor = "red";
            right = [rand_coords[0], rand_coords[1] + 1]
            if((attackedCoords.some(coords => coords[0] === right[0] && coords[1] === right[1])) || right[1] < 0 || right[1] > 9){
                right = null
            }
            left = [rand_coords[0], rand_coords[1] - 1]
            if((attackedCoords.some(coords => coords[0] === left[0] && coords[1] === left[1])) || left[1] < 0 || left [1] > 9){
                left = null
            }
        }
        if(attack != "X"){

            element.style.backgroundColor = "black"; 
        }
        if(player.playerboard.gameStatus() == true){
            console.log("player2 wins")
            status.innerText = "The Computer WINS! Better luck next time!"
            game = false
            return
        }
        return ["player1", left, right]  // return the updated values of left and right
    }
    if(left != null){
        rand_coords = left
        attackedCoords.push(rand_coords)
        let element = document.getElementsByClassName(rand_coords)[0]
        let attack = player.playerboard.receiveAttack(rand_coords)
        if(attack == "X"){
            element.style.backgroundColor = "red";
            left = [left[0], left[1] - 1]
            if((attackedCoords.some(coords => coords[0] === left[0] && coords[1] === left[1])) || left[1] < 0 || left [1] > 9){
                left = null
            }
        }
        if(attack != "X"){

            element.style.backgroundColor = "black";
            left = null 
        }
        if(player.playerboard.gameStatus() == true){
            status.innerText = "The Computer WINS! Better luck next time!"
            console.log("player2 wins")
            game = false
            return
        }
        return ["player1", left, right]
    }
    if(right != null){
        rand_coords = right
        let element = document.getElementsByClassName(rand_coords)[0]
        let attack = player.playerboard.receiveAttack(rand_coords)
        attackedCoords.push(rand_coords)
        if(attack == "X"){
            element.style.backgroundColor = "red";
            right = [right[0], right[1] + 1]
            if((attackedCoords.some(coords => coords[0] === right[0] && coords[1] === right[1])) || right[1] < 0 || right[1] > 9){
                right = null
            }
        }
        if(attack != "X"){
            element.style.backgroundColor = "black";
            right = null 
        }
        if(player.playerboard.gameStatus() == true){
            status.innerText = "The Computer WINS! Better luck next time!"
            console.log("player2 wins")
            game = false
            return
        }
        return ["player1", left, right]
    }
}

    


export {computerturn}
