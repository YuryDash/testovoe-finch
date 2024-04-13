import s from './scale-item.module.scss'

type Props = {
  selected: boolean
}
export const ScaleItem = ({ selected }: Props) => {
  return <div className={selected ? s.selected : s.empty}></div>
}
