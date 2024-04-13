import s from './scale.module.scss'

import { ScaleItem } from './scale-item'

type Props = {
  pickedPoint: number[]
}

export const Scale = ({ pickedPoint }: Props) => {
  const scaleItems = Array(8)
    .fill(null)
    .map((_, index) => {
      return <ScaleItem key={index} selected={index < pickedPoint.length} />
    })

  return (
    <div className={s.wrapper}>
      <div>Поле 1</div>
      <div className={s.scaleItem}>{scaleItems}</div>
    </div>
  )
}
