import {gameboard} from "../gameboard.js"

describe("place()", () => {
    test("case 1", () => {
        const gameboard1 = gameboard();
        expect(gameboard1.place([3,3],3)).toEqual([
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 'ship', 'ship', 'ship'],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5]
        ])
    })
    test("case 2", () => {
        const gameboard1 = gameboard();
        expect(gameboard1.place([2,1],2)).toEqual([
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 'ship', 'ship', 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5]
        ])
    })
    test("should not be able to place ship when length exceed boundaries", () => {
        const gameboard1 = gameboard();
        expect(gameboard1.place([2,4],3)).toEqual([
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5]
        ])
    })
    test("should not be able to place ship when another ship is placed", () => {
        const gameboard1 = gameboard();
        gameboard1.place([2,2],4)
        expect(gameboard1.place([2,0],3)).toEqual([
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 'ship', 'ship', 'ship', 'ship'],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 4, 5]
        ])
    })
})

describe("receiveAttack()", () => {
    test("case 1", () => {
        const gameboard1 = gameboard();
        expect(gameboard1.receiveAttack([2,2])).toBe('@')
    })
    test("case 2", () => {
        const gameboard1 = gameboard();
        gameboard1.place([2,2], 4)
        expect(gameboard1.receiveAttack([2,2])).toBe('X')
    })
})