export function generateRandomNumbers(count: number, max: number): number[] {
  const numbers = Array.from({ length: max }, (_, i) => i + 1)
  const result = []

  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * numbers.length)
    const number = numbers[randomIndex]

    result.push(number - 1)

    numbers.splice(randomIndex, 1)
  }

  return result
}
