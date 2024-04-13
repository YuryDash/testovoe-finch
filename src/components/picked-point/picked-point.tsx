import s from './picked-point.module.scss'
type Props = {
  num: number
}

export const PickedPoint = ({ num }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.lineOne}>
        <div className={s.lineTwo}>
          <div className={s.number}>{num}</div>
        </div>
      </div>
    </div>
  )
}
