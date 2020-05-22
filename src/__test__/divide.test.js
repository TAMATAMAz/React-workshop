import { divide } from '../divide'

test('2 / 2 should equals 1', () => {
  const result = divide(2, 2)

  expect(result).toBe(1)
})

test('2 / 0 should be thrown an error', () => {
  expect(() => divide(2, 0)).toThrow()
})
