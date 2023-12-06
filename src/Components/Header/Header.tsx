import SwitcherLang from '../SwitcherLang/SwitcherLang';
import {useEffect, useRef, useState} from 'react';
import style from './header.module.scss';
import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Arrow } from './arrow.svg';


export default function Header() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const notBtnRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLMenuElement>(null);
  const body = document.querySelector('body');
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

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
          setIsBtnVisible(true) 
          if (btnRef.current) {
            btnRef.current.style.opacity = '1';
          }
        } else {
          header.classList.remove(style.scrolled)
          setIsBtnVisible(false)
          if (notBtnRef.current) {
            notBtnRef.current.style.opacity = '1';
          }
        }
      }
    }

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
  }, []);

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
          {isBtnVisible ?
            <button className={style.btn} ref={btnRef}>
              Get your AG1<span className={style.btnR}>®</span><Arrow />
            </button>
            :
            <div ref={notBtnRef} className={style.notBtn}>
              Shop AG1<span className={style.notBtnR}>®</span>
            </div>
          }
          <div className={style.switcher}>
            <SwitcherLang />
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
              <a href="#" className={style.link}>Shop</a>
            </li>
            <li className={style.item}>
              <a href="#" className={style.link}>Our Story</a>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  )
}