import { useEffect, useState } from 'react'

import { InitialValue } from '@/App'
import { Button, Scale } from '@/components'
import { CheckWinner, checkWinner } from '@/utils/checkWinner'
import { generateRandomNumbers } from '@/utils/generateRandomNumbers'
import { mappedPoints } from '@/utils/mappedPoints'

import s from './game-field.module.scss'

type Props = {
  firstInitialValue: InitialValue[]
  gameResult: (res: CheckWinner) => void
  onChooseFirstValue: (firstValues: InitialValue[]) => void
  onChooseSecondValue: (firstValues: InitialValue[]) => void
  secondInitialValue: InitialValue[]
}

export const GameField = ({
  firstInitialValue,
  gameResult,
  onChooseFirstValue,
  onChooseSecondValue,
  secondInitialValue,
}: Props) => {
  const [pointsNumFirst, setPointsNumFirst] = useState<number[]>([])
  const [pointsNumSecond, setPointsNumSecond] = useState<number[]>([])
  const [checkWin, setCheckWin] = useState<boolean>(false)

  const onChooseField = (num: number, id: string, pick?: boolean, isSecondField?: boolean) => {
    const pointsNum = isSecondField ? pointsNumSecond : pointsNumFirst
    const setPointsNum = isSecondField ? setPointsNumSecond : setPointsNumFirst
    const initialValue = isSecondField ? secondInitialValue : firstInitialValue
    const setInitialValue = isSecondField ? onChooseSecondValue : onChooseFirstValue
    const maxPoints = isSecondField ? 1 : 8

    if (pointsNum.length === maxPoints && !pick) {
      return
    }

    setPointsNum(prevPointsNum => {
      let newPointsNum

      if (prevPointsNum.includes(num)) {
        newPointsNum = prevPointsNum.filter(ArrNum => ArrNum !== num)
      } else {
        newPointsNum = [...prevPointsNum, num]
      }

      return newPointsNum
    })

    const changedValue = initialValue.map(el => {
      if (el.id === id) {
        return { ...el, picked: !el.picked }
      }

      return el
    })

    setInitialValue(changedValue)
  }
  const onChooseRandomValues = () => {
    const randomNumsFirst = generateRandomNumbers(8, firstInitialValue.length)
    const randomNumsSecond = generateRandomNumbers(1, secondInitialValue.length)

    setPointsNumFirst(randomNumsFirst)
    setPointsNumSecond(randomNumsSecond)

    onChooseFirstValue(
      firstInitialValue.map((el, index) => {
        return { ...el, picked: randomNumsFirst.includes(index) }
      })
    )

    onChooseSecondValue(
      secondInitialValue.map((el, index) => {
        return { ...el, picked: randomNumsSecond.includes(index) }
      })
    )
  }

  const mappedPointsOne = mappedPoints(firstInitialValue, (num, id, pick) =>
    onChooseField(num, id, pick)
  )
  const mappedPointsTwo = mappedPoints(secondInitialValue, (num, id, pick) =>
    onChooseField(num, id, pick, true)
  )

  const onCheckWinner = () => {
    const result = checkWinner(
      firstInitialValue.length,
      secondInitialValue.length,
      pointsNumFirst,
      pointsNumSecond
    )

    gameResult(result)
  }

  useEffect(() => {
    if (pointsNumFirst.length === 8 && pointsNumSecond.length === 1) {
      setCheckWin(true)
    } else {
      setCheckWin(false)
    }
  }, [pointsNumFirst, pointsNumSecond])

  return (
    <div className={s.wrapper}>
      <div className={s.titleBlock}>
        <div>Стоимость билета 300 ₽</div>
        <div style={{ fontWeight: '700' }}>ЗАПОЛНИТЕ БИЛЕТ</div>
      </div>
      <span className={s.ruleTitle}>Выберите 8 чисел в первом поле и 1 число во втором поле</span>
      <Scale pickedPoint={pointsNumFirst} />
      <div className={s.pointsOne}>{mappedPointsOne}</div>
      <div className={s.wrapperPointsTwo}>
        <div>Поле 2</div>
        <div className={s.pointsTwo}>{mappedPointsTwo}</div>
      </div>
      <Button btnText={'Случайные числа'} callback={onChooseRandomValues} />
      {checkWin ? <Button btnText={'PLAY'} callback={onCheckWinner} /> : null}
    </div>
  )
}
