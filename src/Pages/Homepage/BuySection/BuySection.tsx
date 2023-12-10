import style from './buySection.module.scss';
import buy11 from './img/buy1.webp';
import buy12 from './img/buy1.png';
import buy21 from './img/buy2.webp';
import buy22 from './img/buy2.png';
import buy31 from './img/buy3.webp';
import buy32 from './img/buy3.png';
import buy41 from './img/buy4.webp';
import buy42 from './img/buy4.png';
import buy51 from './img/buy5.webp';
import buy52 from './img/buy5.png';
import buy61 from './img/buy6.webp';
import buy62 from './img/buy6.png';
import { useState } from 'react';
import icon5 from './img/icon5.svg';
import { ReactComponent as Logo } from './img/logo.svg';
import { Trans, useTranslation } from 'react-i18next';

export default function BuySection() {
  const {t} = useTranslation();
  const [isPouch, setIsPouch] = useState(true);
  return (
    <section className={style.buy}>
      <div className="container">
        <div className={style.buyTop}>
          <div className={style.buyTop__content}>
            <Logo className={style.buyTop__logo} />
            <p className={style.buyTop__text}>{t('homepage.buySection.text')}</p>
            <div className={style.buyTop__switcher}>
              <div className={style.buyTop__choose} onClick={() => {setIsPouch(true)}}>{t('homepage.buySection.pouch')}</div>
              <div
                className={isPouch ? style.buyTop__toggle : [style.buyTop__toggle, style.active].join(' ')}
                onClick={() => setIsPouch(!isPouch)}
              >
              </div>
              <div className={style.buyTop__choose} onClick={() => {setIsPouch(false)}}>{t('homepage.buySection.packs')}</div>
            </div>
          </div>
          <div className={style.buyTop__cards}>
            <div className={style.buyTop__card}>
              <h3 className={style.buyTop__heading}>{t('homepage.buySection.card1.heading')}</h3>
              <div className={style.buyTop__priceBlock}>
                <div className={style.buyTop__price}>{isPouch ? t('homepage.buySection.card1.pouchPrice') : t('homepage.buySection.card1.packPrice')}</div>
              </div>
              <div className={style.buyTop__serving}>{isPouch ? t('homepage.buySection.card1.pouchServing') : t('homepage.buySection.card1.packServing')}</div>
              <div className={style.buyTop__img}>
                {
                isPouch ?
                <picture>
                  <source srcSet={buy11} type="image/webp" />
                  <img src={buy12} alt="The Pouch AG1" loading='lazy' decoding='async' />
                </picture>
                :
                <picture>
                  <source srcSet={buy41} type="image/webp" />
                  <img src={buy42} alt="The Pouch AG1" loading='lazy' decoding='async' />
                </picture>}
              </div>
              <button className={style.buyTop__btn}>{t('homepage.buySection.card1.btn')}</button>
              <div className={style.buyTop__about}>{t('homepage.buySection.card1.about')}</div>
              <ul className={style.buyTop__list}>
                <li className={style.buyTop__listItem}>
                  {isPouch ? t('homepage.buySection.card1.listItem1') : t('homepage.buySection.card1.listItem1_1')}
                </li>
                <li className={style.buyTop__listItem}>{t('homepage.buySection.card1.listItem2')}</li>
              </ul>
            </div>
            <div className={style.buyTop__card}>
              <div className={style.buyTop__mostBest}>{t('homepage.buySection.card2.mostBest')}</div>
              <h3 className={style.buyTop__heading}>{t('homepage.buySection.card2.heading')}</h3>
              <div className={style.buyTop__priceBlock}>
                <div className={style.buyTop__saveWrap}>
                  <div className={style.buyTop__save}>
                    <Trans i18nKey={'homepage.buySection.card2.save'}></Trans>
                  </div>
                </div>
                <div className={style.buyTop__discount}>{isPouch ? t('homepage.buySection.card2.pouchDiscount') : t('homepage.buySection.card2.packDiscount')}</div>
                <div className={style.buyTop__price}>{isPouch ? t('homepage.buySection.card2.pouchPrice') : t('homepage.buySection.card2.packPrice')}</div>
              </div>
              <div className={style.buyTop__serving}>{isPouch ? t('homepage.buySection.card2.pouchServing') : t('homepage.buySection.card2.packServing')}</div>
              <div className={style.buyTop__img}>
                {isPouch ?
                <picture>
                  <source srcSet={buy21} type="image/webp" />
                  <img src={buy22} alt="The Pouch AG1" loading='lazy' decoding='async' />
                </picture>
                :
                <picture>
                  <source srcSet={buy51} type="image/webp" />
                  <img src={buy52} alt="The Pouch AG1" loading='lazy' decoding='async' />
                </picture>}
              </div>
              <button className={style.buyTop__btn}>{t('homepage.buySection.card2.btn')}</button>
              <div className={style.buyTop__about}>{t('homepage.buySection.card2.about')}</div>
              <ul className={style.buyTop__list}>
                <li className={style.buyTop__listItem}>{t('homepage.buySection.card2.listItem1')}</li>
                <li className={style.buyTop__listItem}>{t('homepage.buySection.card2.listItem2')}</li>
                <li className={style.buyTop__listItem}>{t('homepage.buySection.card2.listItem3')}</li>
                <li className={style.buyTop__listItem}>{t('homepage.buySection.card2.listItem4')}</li>
              </ul>
            </div>
            <div className={style.buyTop__card}>
              <div className={style.buyTop__mostBest}>{t('homepage.buySection.card3.mostBest')}</div>
              <h3 className={style.buyTop__heading}>{t('homepage.buySection.card3.heading')}</h3>
              <div className={style.buyTop__priceBlock}>
                <div className={style.buyTop__saveWrap}>
                  <div className={style.buyTop__save}>
                    <Trans i18nKey={'homepage.buySection.card3.save'}></Trans>
                  </div>
                </div>
                <div className={style.buyTop__discount}>{isPouch ? t('homepage.buySection.card3.pouchDiscount') : t('homepage.buySection.card3.packDiscount')}</div>
                <div className={style.buyTop__price}>{isPouch ? t('homepage.buySection.card3.pouchPrice') : t('homepage.buySection.card3.packPrice')}</div>
              </div>
              <div className={style.buyTop__serving}>{isPouch ? t('homepage.buySection.card3.pouchServing') : t('homepage.buySection.card3.packServing')}</div>
              <div className={style.buyTop__img}>
                {isPouch ?
                <picture>
                  <source srcSet={buy31} type="image/webp" />
                  <img src={buy32} alt="The Pouch AG1" loading='lazy' decoding='async' />
                </picture>
                :
                <picture>
                  <source srcSet={buy61} type="image/webp" />
                  <img src={buy62} alt="The Pouch AG1" loading='lazy' decoding='async' />
                </picture>}
              </div>
              <button className={style.buyTop__btn}>{t('homepage.buySection.card3.btn')}</button>
              <div className={style.buyTop__about}>{t('homepage.buySection.card3.about')}</div>
              <ul className={style.buyTop__list}>
                <li className={style.buyTop__listItem}>{isPouch ? t('homepage.buySection.card3.listItem1') : t('homepage.buySection.card3.listItem1_1')}</li>
                <li className={style.buyTop__listItem}>{t('homepage.buySection.card3.listItem2')}</li>
                <li className={style.buyTop__listItem}>{isPouch ? t('homepage.buySection.card3.listItem3') : t('homepage.buySection.card3.listItem3_1')}</li>
                <li className={style.buyTop__listItem}>{t('homepage.buySection.card3.listItem4')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.buy__line}></div>
        <div className={style.buyBottom}>
          <div className={style.buyBottom__content}>
            <h3 className={style.buyBottom__heading}>{t('homepage.buySection.heading')}</h3>
            <p className={style.buyBottom__text}>{t('homepage.buySection.text2')}</p>
          </div>
          <div className={style.buyBottom__free}>
            <div className={style.buyBottom__item}>
              <div className={style.buyBottom__icon}>
                <img src={icon5} alt="icon" />
              </div>
              <div className={style.buyBottom__slogan}>{t('homepage.buySection.slogan1')}</div>
            </div>
            <div className={style.buyBottom__item}>
              <div className={style.buyBottom__icon}>
                <img src={icon5} alt="icon" />
              </div>
              <div className={style.buyBottom__slogan}>{t('homepage.buySection.slogan2')}</div>
            </div>
            <div className={style.buyBottom__item}>
              <div className={style.buyBottom__icon}>
                <img src={icon5} alt="icon" />
              </div>
              <div className={style.buyBottom__slogan}>{t('homepage.buySection.slogan3')}</div>
            </div>
            <div className={style.buyBottom__item}>
              <div className={style.buyBottom__icon}>
                <img src={icon5} alt="icon" />
              </div>
              <div className={style.buyBottom__slogan}>{t('homepage.buySection.slogan4')}</div>
            </div>
            <div className={style.buyBottom__item}>
              <div className={style.buyBottom__icon}>
                <img src={icon5} alt="icon" />
              </div>
              <div className={style.buyBottom__slogan}>{t('homepage.buySection.slogan5')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}