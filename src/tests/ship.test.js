import {ship} from "../ship.js"

describe('isSunk()', () => {
  test('should not sink when hits != length', () => {
    const ship1 = ship(3)
    ship1.hit()
    expect(ship1.isSunk()).toBe(false)
  })
  test('should hit when hit == length', () => {
    const ship1 = ship(3)
    ship1.hit()
    ship1.hit()
    ship1.hit()
    expect(ship1.isSunk()).toBe(true)
  })
})

describe('hit()', () => {
  test('hit should return false when ship has sinked', () => {
    const ship1 = ship(2)
    ship1.hit()
    ship1.hit()
    expect(ship1.hit()).toBe(false);
  })
})