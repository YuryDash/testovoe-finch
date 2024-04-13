import { useState } from 'react'

import { GameField } from '@/components/game-field'

export type InitialValue = {
  id: string
  num: number
  picked: boolean
}

const firstInitialValue: InitialValue[] = [
  { id: '1', num: 1, picked: false },
  { id: '2', num: 2, picked: false },
  { id: '3', num: 3, picked: false },
  { id: '4', num: 4, picked: false },
  { id: '5', num: 5, picked: false },
  { id: '6', num: 6, picked: false },
  { id: '7', num: 7, picked: false },
  { id: '8', num: 8, picked: false },
  { id: '9', num: 9, picked: false },
  { id: '10', num: 10, picked: false },
  { id: '11', num: 11, picked: false },
  { id: '12', num: 12, picked: false },
]

const secondInitialValue: InitialValue[] = [
  { id: '21', num: 1, picked: false },
  { id: '22', num: 2, picked: false },
]

export function App() {
  const [valuesFirst, setValuesFirst] = useState(firstInitialValue)
  const [valuesSecond, setValuesSecond] = useState(secondInitialValue)

  return (
    <div style={{ margin: '20px' }}>
      <GameField
        firstInitialValue={valuesFirst}
        onChooseFirstValue={setValuesFirst}
        onChooseSecondValue={setValuesSecond}
        secondInitialValue={valuesSecond}
      />
    </div>
  )
}
