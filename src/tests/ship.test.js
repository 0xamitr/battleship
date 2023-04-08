import {ship} from "../ship.js"

describe('ship factory function', () => {
  test('should not when hit != length', () => {
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

  test('hit should return false when ship has sinked', () => {
    const ship1 = ship(2)
    ship1.hit()
    ship1.hit()
    expect(ship1.hit()).toBe(false);
  })
})