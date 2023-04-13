function turn(player1, player2, no_of_ships){
    let num = no_of_ships
    let i = 0
    let j = 0
    let game = true
    let turn = "placeship1"
    Array.from(document.getElementsByClassName("player1")).forEach(element => {
        let black = 0
        element.addEventListener("click", () => {
            if(turn == "placeship1"){
                if (player1.playerboard.place((element.innerText).split(",").map(Number), num + 1, "player1") == true){
                    i++
                }
                if(i == 2){
                    turn = "placeship2"
                    return
                }
            }
            if(game && (turn == "player2") && !black){
                element.style.backgroundColor = "black"; 
                let attack = player1.playerboard.receiveAttack((element.innerText).split(",").map(Number))
                if(attack == "X"){
                    element.style.backgroundColor = "red"; 
                    black++
                }
                if(attack != "X"){
                    element.style.backgroundColor = "black"; 
                    black++
                }
                if(player1.playerboard.gameStatus() == true){
                    console.log("player2 wins")
                    game = false
                    return
                }
                turn = "player1"
            }
        })
    })
    Array.from(document.getElementsByClassName("player2")).forEach(element => {
        let black = 0
        element.addEventListener("click", () => {
            if(turn == "placeship2"){
                if (player2.playerboard.place((element.innerText).split(",").map(Number), num + 1, "player2") == true){
                    j++
                }
                if(j == 2){
                    turn = "player1"
                    return
                }
            }
            if(game && (turn == "player1") && !black){
                let attack = player2.playerboard.receiveAttack((element.innerText).split(",").map(Number))
                console.log(attack)
                if(attack == "X"){
                    element.style.backgroundColor = "red"; 
                    black++
                }
                if(attack != "X"){
                    element.style.backgroundColor = "black"; 
                    black++
                }
                if(player2.playerboard.gameStatus() == true){
                    console.log("player1 wins")
                    game = false
                    return
                }
                turn = "player2"
            }
        })
    });
}

export {turn}