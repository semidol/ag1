import style from './footer.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import {ReactComponent as Icon1} from './img/icon1.svg';
import {ReactComponent as Icon2} from './img/icon2.svg';
import {ReactComponent as Icon3} from './img/icon3.svg';
import {ReactComponent as Icon4} from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const {t} = useTranslation();
  const [isOpenShop, setIsOpenShop] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <footer className={style.footer}>
        <div className={style.wrapper}>
          <div className={style.section1}>
            <div className={style.lists}>
              <div className={style.listBlock}>
                <h3 onClick={windowWidth >= 1440 ? undefined : () => setIsOpenShop(!isOpenShop)} className={isOpenShop ? [style.listHeading, style.active].join(' ') : style.listHeading}>{t('footer.list1.heading')}</h3>
                <Collapse isOpened={isOpenShop || windowWidth >= 1440}>
                  <ul className={style.list}>
                    <li className={style.listItem}><a className={style.listLink} href="#">{t('footer.list1.link1')}</a></li>
                    <li className={style.listItem}><a className={style.listLink} href="#">{t('footer.list1.link2')}</a></li>
                  </ul>
                </Collapse>
              </div>
              <div className={style.listBlock}>
                <h3 onClick={windowWidth >= 1440 ? undefined : () => setIsOpenAbout(!isOpenAbout)} className={isOpenAbout ? [style.listHeading, style.active].join(' ') : style.listHeading}>{t('footer.list2.heading')}</h3>
                <Collapse isOpened={isOpenAbout || windowWidth >= 1440}>
                  <ul className={style.list}>
                    <li className={style.listItem}><a className={style.listLink} href="#">{t('footer.list2.link1')}</a></li>
                  </ul>
                </Collapse>
              </div>
              <div className={windowWidth >= 1440 ? undefined : style.listBlock}>
                <h3 onClick={() => setIsOpenContact(!isOpenContact)} className={isOpenContact ? [style.listHeading, style.active].join(' ') : style.listHeading}>{t('footer.list1.heading')}</h3>
                <Collapse isOpened={isOpenContact || windowWidth >= 1440}>
                  <ul className={style.list}>
                    <li className={style.listItem}><a className={style.listLink} href='tel:+79999999999'>+79999999999</a></li>
                    <li className={style.listItem}><a className={style.listLink} href="mailto:example@example.com">example@example.com</a></li>
                  </ul>
                </Collapse>
              </div>
            </div>
            <div className={style.connectWrapper}>
              <div className={style.connectBlock}>
                <h3 className={style.connectHeading}>{t('footer.connect.heading')}</h3>
                <p className={style.join}>{t('footer.connect.join')}</p>
                <form className={style.inputBlock} action="">
                  <input className={style.input} placeholder={t('footer.connect.input')} type="text" />
                  <button className={style.btn}>
                    <img src={icon5} alt="arrow" />
                  </button>
                </form>
                {windowWidth >= 1440 && <div className={style.social}>
                  <a href="#"><Icon1 className={style.icon} /></a>
                  <a href="#"><Icon2 className={style.icon} /></a>
                  <a href="#"><Icon3 className={style.icon} /></a>
                  <a href="#"><Icon4 className={style.icon} /></a>
                </div>}
              </div>
            </div>
          </div>
          {windowWidth >= 1024 && <div className={style.divider}></div>}
          {windowWidth >= 1440 && <div className={style.section2}>
            <a href="#"><Logo className={style.logo} /></a>
            <div className={style.notes}>
              <p className={style.attention}>{t('footer.notes.attention')}</p>
              <p className={style.note}>{t('footer.notes.note1')}</p>
              <p className={style.note}>{t('footer.notes.note2')}</p>
              <p className={style.note}>{t('footer.notes.note3')}</p>
              <p className={style.note}>{t('footer.notes.note4')}</p>
              <p className={style.note}>{t('footer.notes.note5')}</p>
              <p className={style.note}>{t('footer.notes.note6')}</p>
              <p className={style.note}>{t('footer.notes.note7')}</p>
              <p className={style.note}>{t('footer.notes.note8')}</p>
              <p className={style.note}>{t('footer.notes.note9')}</p>
            </div>
            <div className={style.settings}>
              <div className={style.param}>{t('footer.settings.language')}</div>
              <div className={style.settingsDivider}></div>
              <div className={style.param}>{t('footer.settings.currency')}</div>
            </div>
            <div className={style.right}>© 2023 Athletic Greens</div>
          </div>}
          {windowWidth < 1440 && <div className={style.section3}>
            <div className={style.social}>
              <a href="#"><Icon1 className={style.icon} /></a>
              <a href="#"><Icon2 className={style.icon} /></a>
              <a href="#"><Icon3 className={style.icon} /></a>
              <a href="#"><Icon4 className={style.icon} /></a>
            </div>
            <a href="#"><Logo className={style.logo} /></a>
            <div className={style.right}>© 2023 Athletic Greens</div>
          </div>}
          {windowWidth < 1440 && <div className={style.divider}></div>}
          {windowWidth < 1440 &&<div className={style.section4}>
            <div className={style.settings}>
              <div className={style.param}>{t('footer.settings.language')}</div>
              <div className={style.settingsDivider}></div>
              <div className={style.param}>{t('footer.settings.currency')}</div>
            </div>
          </div>}
          {windowWidth < 1440 && <div className={style.divider}></div>}
          {windowWidth < 1440 &&<div className={style.section5}>
            <div className={style.notes}>
              <p className={style.attention}>{t('footer.notes.attention')}</p>
              <p className={style.note}>{t('footer.notes.note1')}</p>
              <p className={style.note}>{t('footer.notes.note2')}</p>
              <p className={style.note}>{t('footer.notes.note3')}</p>
              <p className={style.note}>{t('footer.notes.note4')}</p>
              <p className={style.note}>{t('footer.notes.note5')}</p>
              <p className={style.note}>{t('footer.notes.note6')}</p>
              <p className={style.note}>{t('footer.notes.note7')}</p>
              <p className={style.note}>{t('footer.notes.note8')}</p>
              <p className={style.note}>{t('footer.notes.note9')}</p>
            </div>
          </div>}
        </div>
    </footer>
  )
}