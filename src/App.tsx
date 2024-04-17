import { useState } from 'react'

import { WinnerField } from '@/components'
import { GameField } from '@/components/game-field'
import { CheckWinner } from '@/utils/checkWinner'

import s from './App.module.scss'
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
  const [win, setWin] = useState<CheckWinner | null>(null)

  const callBackSetFirstValue = (values: InitialValue[]) => {
    setValuesFirst(values)
  }

  const gameResultCallback = (resultGame: CheckWinner) => {
    setWin(resultGame)
  }

  return (
    <div className={s.warpper}>
      <GameField
        firstInitialValue={valuesFirst}
        gameResult={gameResultCallback}
        onChooseFirstValue={callBackSetFirstValue}
        onChooseSecondValue={setValuesSecond}
        secondInitialValue={valuesSecond}
      />
      <div className={s.wrapperWinner}>
        {win && (
          <WinnerField
            title={'Winner Numbers'}
            verificationValueFirst={win.winnerFirstValues}
            verificationValueSecond={win.winnerSecondValues}
          />
        )}
        {win && (
          <WinnerField
            title={win.winner ? 'You WIN' : 'YOU LOOSE'}
            verificationValueFirst={win.verificationValueFirst}
            verificationValueSecond={win.verificationValueSecond}
          />
        )}
      </div>
    </div>
  )
}
