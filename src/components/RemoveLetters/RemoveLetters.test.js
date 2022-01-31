import RemoveLetters from './RemoveLetters'

test('check if function accepts a number and a string', () => {
  expect(() => RemoveLetters('xxyy', 1)).not.toThrow()
})
