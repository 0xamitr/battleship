function boardpopulate(board, player){
    const box_dimension = (600-20) / 10
    const boardchild = document.createElement("div")
    boardchild.setAttribute("style", `height: ${box_dimension}px; width: ${box_dimension}px; border: solid 1px black` )
    boardchild.setAttribute("class", `${player}`)
    let x = 0
    let y = 0
    for(let i = 0; i < 100; i++){
        let node = boardchild.cloneNode()
        let innertext = [y,x]
        node.innerText = `${innertext}`;
        node.classList.add(`${innertext}`)
        node.style.fontSize = "0"
        board.append(node)
        x++
        if (x % 10 == 0){
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