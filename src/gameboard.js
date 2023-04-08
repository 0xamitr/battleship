import {ship} from "./ship.js"

const gameboard = () => {
    let board = [
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5]
    ]
    const ships = []
    const place = (cord, length) => {
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
            if (6 - cord[1] >= length){
                let test = 0;
                while(index){
                    if (board[cord[0]][cord[1] + length - index] != "ship"){
                        coords.push(board[cord[0]][cord[1] + length - index])
                        test++
                    }
                    index--
                }
                if(test == length){
                    ourship.cords = coords;
                    coords = [];
                    return true
                }
            }
            return false
        }
        if(checkforempty()){
            index = length
            while(index){
                board[cord[0]][cord[1] + length - index] = "ship"
                index--
            }
            return board
        }
        return board
    }
    const receiveAttack = (cords) =>{
        if(board[cords[0]][cords[1]] == 'ship'){
            ships.forEach(e => {
                (e.coords).forEach((e1) => {
                    if(board[cords[0]][cords[1]] == e1){
                        e.hit();
                        board[cords[0]][cords[1]] == "X"
                    }
                })
            })
        }
    }
    return {place, receiveAttack}
}

export {gameboard}