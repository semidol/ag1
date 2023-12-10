import { FormEvent, useEffect, useRef } from 'react';
import style from './SwitcherLang.module.scss'
import { useTranslation } from 'react-i18next'

interface ISwitcherLang {
  setPortal: (active: boolean) => void,
}

export default function SwitcherLang({setPortal}:ISwitcherLang) {
  const {t, i18n} = useTranslation();
  const rusInputRef = useRef<HTMLInputElement>(null);
  const engInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLFormElement>(null);

  function submitHandler(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const radios = [rusInputRef, engInputRef];
    let obj = radios.find(item => item.current?.checked);
    i18n.changeLanguage(obj?.current?.value);
    setPortal(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setPortal(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={style.wrapper}>
      <form onSubmit={submitHandler} ref={modalRef} className={style.modal}>
        <div className={style.top}>
          <h3 className={style.heading}>{t('switcherLang.heading')}</h3>
          <div className={style.close} onClick={() => setPortal(false)}></div>
        </div>
        <div className={style.center}>
          <p className={style.text}>{t('switcherLang.text')}</p>
          <fieldset>
              <div className={style.inputBlock}>
                <input ref={rusInputRef} defaultChecked={i18n.language === 'ru'} className={style.input} type="radio" id="russian" name="lang" value="ru" />
                <label className={style.label} htmlFor="russian">{t('switcherLang.russian')}</label>
              </div>
              <div className={style.inputBlock}>
                <input ref={engInputRef} defaultChecked={i18n.language === 'en'} className={style.input} type="radio" id="english" name="lang" value="en" />
                <label className={style.label} htmlFor="english">{t('switcherLang.english')}</label>
              </div>
          </fieldset>
        </div>
        <div className={style.bottom}>
          <button type='button' onClick={() => setPortal(false)} className={style.cancel}>{t('switcherLang.cancel')}</button>
          <button className={style.save}>{t('switcherLang.save')}</button>
        </div>
      </form>
    </div>
  )
}