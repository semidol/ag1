import style from './switcherLang.module.scss';
import { ReactComponent as EnFlag } from './enFlag.svg';

export default function SwitcherLang() {
  return (
    <div className={style.wrappper}>
      <EnFlag className={style.flag}/>
    </div>
  )
}