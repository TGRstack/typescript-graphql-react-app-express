// tslint:disable no-any
import { arrDiags, flatArray } from '../array'

describe('flatArray(arr)', () => {
  test('works', () => {
    const data = [1, 2, [3, 4]]
    const res = [1, 2, 3, 4]

    expect(flatArray(data)).toEqual(res)
  })
})

describe('arrDiags(arr)', () => {
  test('works', () => {
    const positions = [
      [1, 2, 2],
      [0, 1, 0],
      [0, 0, 1],
    ]
    const diagonals = arrDiags(positions)

    expect(diagonals[0]).toEqual([1, 1, 1])
    expect(diagonals[1]).toEqual([0, 1, 2])
  })
})
