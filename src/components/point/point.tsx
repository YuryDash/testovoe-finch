import s from './piont.module.scss'

type Props = {
  id: string
  num: number
  onChoose: (num: number, id: string) => void
}

export const Point = ({ id, num, onChoose }: Props) => {
  return (
    <div className={s.wrapper} onClick={() => onChoose(num, id)}>
      {num}
    </div>
  )
}
