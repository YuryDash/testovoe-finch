import { DiceIcon } from '@/assets/dice'

import s from './button.module.scss'

type Props = {
  btnText: string
}

export const Button = ({ btnText }: Props) => {
  return (
    <div className={s.buttonWrapper}>
      <button className={s.buttonSubmit}>
        <div className={s.btnIcon}>
          <DiceIcon />
        </div>
        <div className={s.btnTitle}>{btnText}</div>
      </button>
    </div>
  )
}
