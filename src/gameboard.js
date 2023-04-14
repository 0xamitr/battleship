import {ship} from "./ship.js"

const gameboard = () => {
    let board = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]
    let gameover = false;
    const ships = []
    const place = (cord, length, hoalder) => {
        console.log("placecalled")
        const ourship = ship(length)
        if(cord.length != 2){
            return false
        }
        if(length < 1){
            return false
        }
        let index = length
        const checkforempty = () => {
            let coords = []
            if (10 - cord[1] >= length){
                let test = 0;
                while(index){
                    if (board[cord[0]][cord[1] + length - index] != "ship"){
                        coords.push([[cord[0]],[cord[1] + length - index]])
                        test++
                    }
                    index--
                }
                if(test == length){
                    ourship.cords = coords;
                    ships.push(ourship)
                    coords = [];
                    return true
                }
            }
            return false
        }
        if(checkforempty()){
            console.log("run")
            index = length
            while(index){
                board[cord[0]][cord[1] + length - index] = "ship"
                let innertext = [cord[0],(cord[1] + length - index)]
                if(hoalder == "player1"){
                    (document.getElementsByClassName(innertext)[0]).style.backgroundColor = "grey"

                }
                index--
            }
            return true
        }
        return false
    }
    let check = 0
    const receiveAttack = (cords) =>{
        const ship_num = ships.length
        if(board[cords[0]][cords[1]] == 'ship'){
            ships.forEach(e => {
                (e.cords).forEach((e1) => {
                    if(cords[0] == e1[0] && cords[1] == e1[1]){
                        e.hit()
                        if(e.isSunk() == true){
                            check++
                        }
                        board[cords[0]][cords[1]] = "X"
                    }
                })
            })
        }
        else{
            board
            [cords[0]][cords[1]] = '@'
        }
        if(ship_num == check){
            gameover = true;
        }
        return board[cords[0]][cords[1]]
    }
    const gameStatus = () =>{
        return gameover
    }
    const getboard = () =>{
        return board
    }
    return {gameStatus, place, receiveAttack, getboard}
}
export {gameboard}