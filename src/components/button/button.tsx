import { DiceIcon } from '@/assets/dice'

import s from './button.module.scss'

type Props = {
  btnText: string
  callback: () => void
}

export const Button = ({ btnText, callback }: Props) => {
  return (
    <div className={s.buttonWrapper} onClick={callback}>
      <button className={s.buttonSubmit}>
        <div className={s.btnIcon}>
          <DiceIcon />
        </div>
        <div className={s.btnTitle}>{btnText}</div>
      </button>
    </div>
  )
}
