import { useState } from 'react'

import { InitialValue } from '@/App'
import { Button, PickedPoint, Scale } from '@/components'

import s from './game-field.module.scss'

import { Point } from '../point'

type Props = {
  firstInitialValue: InitialValue[]
  onChooseFirstValue: (firstValues: InitialValue[]) => void
  onChooseSecondValue: (firstValues: InitialValue[]) => void
  secondInitialValue: InitialValue[]
}

export const GameField = ({
  firstInitialValue,
  onChooseFirstValue,
  onChooseSecondValue,
  secondInitialValue,
}: Props) => {
  const [pointsNum, setPointsNum] = useState<number[]>([])
  const onChooseFirstField = (num: number, id: string) => {
    if (pointsNum.length === 8) {
      return
    }
    const changedFirstValue = firstInitialValue.map(el => {
      if (!el.picked) {
        setPointsNum([...pointsNum, num])

        return el.id === id ? { ...el, picked: !el.picked } : el
      }
      if (el.picked) {
        setPointsNum(pointsNum.filter(el => el !== num))

        return el.id === id ? { ...el, picked: !el.picked } : el
      }
    })

    onChooseFirstValue(changedFirstValue)
  }
  const onChooseSecondField = (num: number, id: string) => {
    console.log(num)
    console.log(id)
  }

  const mappedPointsOne = firstInitialValue.map(el => {
    if (!el.picked) {
      return <Point id={el.id} key={el.id} num={el.num} onChoose={onChooseFirstField} />
    }
    if (el.picked) {
      //TODO сделать отбатное оттыкивание в этой fn...
      return <PickedPoint key={el.id} num={el.num} onChooseChange={} />
    }
  })

  const mappedPointsTwo = secondInitialValue.map(el => {
    return <Point id={el.id} key={el.id} num={el.num} onChoose={onChooseSecondField} />
  })

  return (
    <div className={s.wrapper}>
      <div className={s.titleBlock}>
        <div>Стоимость билета 300 ₽</div>
        <div style={{ fontWeight: '700' }}>ЗАПОЛНИТЕ БИЛЕТ</div>
      </div>
      <span className={s.ruleTitle}>Выберите 8 чисел в первом поле и 1 число во втором поле</span>
      <Scale pickedPoint={pointsNum} />
      <div className={s.pointsOne}>{mappedPointsOne}</div>
      <div className={s.wrapperPointsTwo}>
        <div>Поле 2</div>
        <div className={s.pointsTwo}>{mappedPointsTwo}</div>
      </div>
      <Button btnText={'Случайные числа'} />
    </div>
  )
}
