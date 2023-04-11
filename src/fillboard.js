function boardpopulate(board, player){
    const box_dimension = (600-12)/6
    const boardchild = document.createElement("div")
    boardchild.setAttribute("style", `height: ${box_dimension}px; width: ${box_dimension}px; border: solid 1px black` )
    boardchild.setAttribute("class", `${player}`)
    let x = 0
    let y = 0
    for(let i = 0; i < 36; i++){
        let node = boardchild.cloneNode()
        node.innerText = [y, x];
        board.append(node)
        x++
        if (x % 6 == 0){
            y++
            x = 0
        }
    }
}

function fillboard(){
    const board = document.getElementsByClassName("gameboard")
    boardpopulate(board[0], "player1")
    boardpopulate(board[1], "player2")


}

export {fillboard}