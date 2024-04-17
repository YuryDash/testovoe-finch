import { InitialValue } from '@/App'

import s from './picked-point.module.scss'
type Props = {
  onChoose: (num: number, id: string, picked?: boolean) => void
  point: InitialValue | number
}

export const PickedPoint = ({ onChoose, point }: Props) => {
  if (typeof point === 'number') {
    // Если point - это число, просто отрисовываем его
    return (
      <div className={s.wrapper}>
        <div className={s.lineOne}>
          <div className={s.lineTwo}>
            <div className={s.number}>{point}</div>
          </div>
        </div>
      </div>
    )
  }

  const { id, num, picked } = point

  const onClickHandler = () => {
    onChoose(num, id, picked)
  }

  return (
    <div className={s.wrapper} onClick={onClickHandler}>
      <div className={s.lineOne}>
        <div className={s.lineTwo}>
          <div className={s.number}>{num}</div>
        </div>
      </div>
    </div>
  )
}
