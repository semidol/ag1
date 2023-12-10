import {useEffect, useRef, useState} from 'react';
import style from './header.module.scss';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Arrow } from './arrow.svg';
import { Trans, useTranslation } from 'react-i18next';
import { ReactComponent as EnFlag } from './flag-russia-circle.svg';
import SwitcherLang from '../SwitcherLang/SwitcherLang';
import { createPortal } from 'react-dom';


export default function Header() {
  const {t} = useTranslation();
  const menuRef = useRef<HTMLMenuElement>(null);
  const body = document.querySelector('body');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    const scrollHandler = () => {
      const scrollPoint1 = 58; //пик уменьшения высоты header
      const scrollPoint2 = 120; //header становится белым
      let currentScroll = document.body.scrollTop || document.documentElement.scrollTop; 
      if (header) {
        header.style.height = currentScroll <= scrollPoint1 ? 138 - currentScroll + 'px' : '80px';
        if (currentScroll >= scrollPoint2) {
          header.classList.add(style.scrolled);
        } else {
          header.classList.remove(style.scrolled)
        }
      }
    }
    
    scrollHandler();
    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  },[])

  function setMenu(active:boolean) {
    setIsMenuActive(active);
    let body = document.querySelector('body');
    if (body) {
      body.style.marginRight = body.classList.contains('active') ?
        '0'
        :
        window.innerWidth - body.clientWidth + 'px'
      body.classList.toggle('active');
    }
  }

  function setPortal(active:boolean) {
    let body = document.querySelector('body');
    if (body) {
      body.style.marginRight = body.classList.contains('portal') ?
        '0'
        :
        window.innerWidth - body.clientWidth + 'px';
      if (active) {
        body.classList.add('portal');
      } else {body.classList.remove('portal')}
    }
    setIsSwitcherOpen(active);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        body?.classList.remove('active');
        setIsMenuActive(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); //click outside menu

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.leftSide}>
          <div className={style.burger} onClick={() => setMenu(true)}>
            <span className={style.burgerLine}></span>
          </div>
          <a href='#'>
            <Logo className={style.logo} />
          </a>
        </div>
        <div className={style.rightSide}> 
          <div className={style.btnWrapper}>
              <button className={style.btn}>
                <Trans i18nKey={'header.btn'}></Trans><Arrow />
              </button>
              <div className={style.notBtn}>
              <Trans i18nKey={'header.notBtn'}></Trans>
              </div>
          </div>
          <div onClick={() => setPortal(true)} className={style.switcher}>
            <EnFlag className={style.flag}/>
            {isSwitcherOpen && createPortal(<SwitcherLang setPortal={setPortal} />, document.body)}
          </div>
        </div>
        <menu ref={menuRef} className={isMenuActive ? [style.menu, style.active].join(' ') : style.menu}>
          <div className={style.top}>
            <div className={style.close} onClick={() => setMenu(false)}>
              <span className={style.closeLine}></span>
            </div>
            <a href="#">
              <Logo className={style.menuLogo} />
            </a>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <a href="#" className={style.link}>{t('header.menu.shop')}</a>
            </li>
            <li className={style.item}>
              <a href="#" className={style.link}>{t('header.menu.story')}</a>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  )
}