
function placeships(player1, player2, no_of_ships){
    let num = no_of_ships
    let turn = "player1"
    let i = 0
    let j = 0
    Array.from(document.getElementsByClassName("player1")).forEach(element => {
        element.addEventListener("click", () => {
            if(turn == "player1"){
                if (player1.playerboard.place((element.innerText).split(",").map(Number), num + 1) == true){
                    i++
                }
                if(i == 2){
                    turn = "player2"
                    return
                }
            }
        })
    })
    Array.from(document.getElementsByClassName("player2")).forEach(element => {
        element.addEventListener("click", () => {
            if(turn == "player2"){
                if (player2.playerboard.place((element.innerText).split(",").map(Number), num + 1) == true){
                    j++
                }
                if(j == 2){
                    turn = "stop"
                    return
                }
            }
        })
    });
}

export {placeships}