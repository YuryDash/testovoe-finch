import { generateRandomNumbers } from '@/utils/generateRandomNumbers'

export type CheckWinner = {
  verificationValueFirst: number[]
  verificationValueSecond: number[]
  winner: boolean
  winnerFirstValues: number[]
  winnerSecondValues: number[]
}

export const checkWinner = (
  firstField: number,
  secondValue: number,
  equalFirst: number[],
  equalSecond: number[]
): CheckWinner => {
  const winnerFirstValues = generateRandomNumbers(8, firstField)
  const winnerSecondValues = generateRandomNumbers(1, secondValue)

  const verificationValueFirst = winnerFirstValues.filter(el => equalFirst.includes(el))
  const verificationValueSecond = winnerSecondValues.filter(el => equalSecond.includes(el))

  const isWinner =
    verificationValueFirst.length >= 4 ||
    (verificationValueSecond.length === 1 && verificationValueFirst.length >= 3)

  return {
    verificationValueFirst,
    verificationValueSecond,
    winner: isWinner,
    winnerFirstValues,
    winnerSecondValues,
  }
}
