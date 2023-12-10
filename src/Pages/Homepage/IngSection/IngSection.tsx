import style from './ingSection.module.scss';
import standart1 from './img/standart1.svg';
import standart2 from './img/standart2.svg';
import ing11 from './img/ing1.webp';
import ing12 from './img/ing1.jpg';
import ing21 from './img/ing2.webp';
import ing22 from './img/ing2.jpg';
import {Collapse} from 'react-collapse';
import portal1 from './img/portal1.webp';
import portal2 from './img/portal2.jpg';
import portal3 from './img/portal3.webp';
import portal4 from './img/portal4.jpg';
import portal5 from './img/portal5.webp';
import portal6 from './img/portal6.jpg';
import portal7 from './img/portal7.webp';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

export default function IngSection() {
  const {t} = useTranslation()
  const [activeItem, setActiveItem] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  function listHandler(item:number) {
    if (activeItem === item) {
      setActiveItem(0)
    }
    else {
      setActiveItem(item)
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
    setIsOpenPortal(active);
  }

  return (
    <section className={style.ing}>
      <div className="container">
        <div className={style.ing__block}>
          <h3 className={style.ing__heading}>{t('homepage.ingSection.heading1')}</h3>
          <div className={style.ing__img}>
            <picture>
              <source srcSet={ing11} type="image/webp" />
              <img src={ing12} alt="glass of AG1" loading='lazy' decoding='async' />
            </picture>
          </div>
          <div className={style.ing__content}>
            <h4 className={style.ing__contentHeading}>{t('homepage.ingSection.contentHeading1')}</h4>
            <p className={style.ing__text}>{t('homepage.ingSection.contentText1')}</p>
            <h4 className={style.ing__contentHeading}>{t('homepage.ingSection.contentHeading2')}</h4>
            <p className={style.ing__text}>{t('homepage.ingSection.contentText2')}</p>
            <h4 className={style.ing__contentHeading}>{t('homepage.ingSection.contentHeading3')}</h4>
            <p className={style.ing__text}>{t('homepage.ingSection.contentText3')}</p>
          </div>
        </div>
        <div className={style.ing__block}>
          <h3 className={style.ing__heading}>{t('homepage.ingSection.heading2')}</h3>
          <div className={style.ing__quality}>
            <div className={style.ing__qualityImg}>
              <img src={standart1} alt="Standart" loading='lazy' decoding='async' />
            </div>
            <div className={style.ing__qualityImg}>
              <img src={standart2} alt="Standart" loading='lazy' decoding='async' />
            </div>
          </div>
          <div className={style.ing__img}>
            <picture>
              <source srcSet={ing21} type="image/webp" />
              <img src={ing22} alt="bottle of AG1" loading='lazy' decoding='async' />
            </picture>
          </div>
          <div className={style.ing__content}>
            <div className={style.ing__contentBlock}>
              <h4 onClick={windowWidth >= 768 ? undefined : () => listHandler(1)} className={activeItem === 1 ? [style.ing__contentHeading, style.active].join(' ') : style.ing__contentHeading}>{t('homepage.ingSection.contentHeading4')}</h4>
              <Collapse isOpened={activeItem === 1 || windowWidth >= 768 ? true : false}>
                <p className={style.ing__text}>{t('homepage.ingSection.contentText4')}</p>
              </Collapse>
            </div>
            <div className={style.ing__contentBlock}>
              <h4 onClick={windowWidth >= 768 ? undefined : () => listHandler(2)} className={activeItem === 2 ? [style.ing__contentHeading, style.active].join(' ') : style.ing__contentHeading}>{t('homepage.ingSection.contentHeading5')}</h4>
              <Collapse isOpened={activeItem === 2 || windowWidth >= 768 ? true : false}>
                <p className={style.ing__text}>{t('homepage.ingSection.contentText5')}</p>
              </Collapse>
            </div>
            <div className={style.ing__contentBlock}>
              <h4 onClick={windowWidth >= 768 ? undefined : () => listHandler(3)} className={activeItem === 3 ? [style.ing__contentHeading, style.active].join(' ') : style.ing__contentHeading}>{t('homepage.ingSection.contentHeading6')}</h4>
              <Collapse isOpened={activeItem === 3 || windowWidth >= 768 ? true : false}>
                <p className={style.ing__text}>{t('homepage.ingSection.contentText6')}</p>
              </Collapse>
            </div>
            <button onClick={() => setPortal(true)} className={style.ing__btn}>{t('homepage.ingSection.btn')}<div className={style.ing__plus}></div></button>
            {isOpenPortal && createPortal(
              <div className={style.ing__portal}>
                <div className={style.ing__portalContent}>
                  <div className={style.ing__portalBtnWrapper}>
                    <button onClick={() => setPortal(false)} className={style.ing__portalBtn}></button>
                  </div>
                  <div className={style.ing__portalInner}>
                    <picture>
                      <source srcSet={portal1} type="image/webp" media="(min-width:1440px)" />
                      <source srcSet={portal2} media="(min-width:1440px)" />
                      <source srcSet={portal3} type="image/webp" media="(min-width:768px)" />
                      <source srcSet={portal4} media="(min-width:768px)" />
                      <source srcSet={portal5} type="image/webp" media="(max-width:767px)" />
                      <source srcSet={portal6} media="(max-width:767px)" />
                      <img alt="Ingredients List" loading="lazy" src={portal7} decoding="async" />
                    </picture>
                  </div>
                </div>
              </div>
            , document.body)}
          </div>
        </div>
      </div>
    </section>
  )
}