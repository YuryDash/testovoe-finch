import { ReactElement } from 'react'

import { InitialValue } from '@/App'
import { PickedPoint, Point } from '@/components'

export const mappedPoints = (
  pointsValues: InitialValue[],
  callbackHandle: (num: number, id: string, pick?: boolean) => void
): ReactElement[] => {
  return pointsValues.map(el => {
    if (!el.picked) {
      return <Point id={el.id} key={el.id} num={el.num} onChoose={callbackHandle} />
    } else {
      return <PickedPoint key={el.id} onChoose={callbackHandle} point={el} />
    }
  })
}
