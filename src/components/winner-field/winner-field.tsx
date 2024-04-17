import { PickedPoint } from '@/components'

import s from './winner-field.module.scss'

type Props = {
  title: string
  verificationValueFirst: number[]
  verificationValueSecond: number[]
  // win: CheckWinner
}
export const WinnerField = ({ title, verificationValueFirst, verificationValueSecond }: Props) => {
  const mappedPointsOne = verificationValueFirst.map(el => {
    return <PickedPoint key={el} onChoose={() => {}} point={el + 1} />
  })
  const mappedPointsTwo = verificationValueSecond.map(el => {
    return <PickedPoint key={el} onChoose={() => {}} point={el + 1} />
  })

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div style={{ alignItems: 'center', display: 'flex', gap: '10px', padding: '10px' }}>
        <div>поле 1</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {mappedPointsOne.length ? mappedPointsOne : 'Нет совпадений'}
        </div>
      </div>
      <div style={{ alignItems: 'center', display: 'flex', gap: '10px', padding: '10px' }}>
        <div>поле 2</div>
        <div style={{ display: 'flex' }}>
          {mappedPointsTwo.length ? (
            mappedPointsTwo
          ) : (
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Нет совпадений</span>
          )}
        </div>
      </div>
    </div>
  )
}
