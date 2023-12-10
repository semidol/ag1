import style from './habitSection.module.scss';
import habit11 from './img/habit1.webp';
import habit12 from './img/habit1.jpg';
import habit21 from './img/habit2.webp';
import habit22 from './img/habit2.jpg';
import habit31 from './img/habit3.webp';
import habit32 from './img/habit3.jpg';
import habit41 from './img/habit4.webp';
import habit42 from './img/habit4.jpg';
import habit51 from './img/habit5.webp';
import habit52 from './img/habit5.jpg';
import habit61 from './img/habit6.webp';
import habit62 from './img/habit6.jpg';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { Trans, useTranslation } from 'react-i18next';

export default function HabitSection() {
  const {t} = useTranslation();
  const habitContent = [
    {
      webpSrc: habit11,
      jpgSrc: habit12,
      heading: t('homepage.habitSection.item1.heading'),
      text: <Trans i18nKey={'homepage.habitSection.item1.text'}></Trans>
    },
    {
      webpSrc: habit21,
      jpgSrc: habit22,
      heading: t('homepage.habitSection.item2.heading'),
      text: <Trans i18nKey={'homepage.habitSection.item2.text'}></Trans>
    },
    {
      webpSrc: habit31,
      jpgSrc: habit32,
      heading: t('homepage.habitSection.item3.heading'),
      text: <Trans i18nKey={'homepage.habitSection.item3.text'}></Trans>
    },
    {
      webpSrc: habit41,
      jpgSrc: habit42,
      heading: t('homepage.habitSection.item4.heading'),
      text: <Trans i18nKey={'homepage.habitSection.item4.text'}></Trans>
    },
    {
      webpSrc: habit51,
      jpgSrc: habit52,
      heading: t('homepage.habitSection.item5.heading'),
      text: <Trans i18nKey={'homepage.habitSection.item5.text'}></Trans>
    },
    {
      webpSrc: habit61,
      jpgSrc: habit62,
      heading: t('homepage.habitSection.item6.heading'),
      text: <Trans i18nKey={'homepage.habitSection.item6.text'}></Trans>
    }
  ]

  return (
    <section className={style.habit}>
      <div className="container">
        <h2 className={style.habit__heading}>{t('homepage.habitSection.heading')}</h2>
        <p className={style.habit__text}>{t('homepage.habitSection.text')}</p>
        <div className={style.habit__items}>
          {habitContent.map((item,index) => (
            <div key={index} className={style.habit__item}>
              <div className={style.habit__img}>
                <picture>
                  <source srcSet={item.webpSrc} type="image/webp" />
                  <img src={item.jpgSrc} alt="useful elements" loading='lazy' decoding='async' />
                </picture>
              </div>
              <h3 className={style.habit__itemHeading}>{item.heading}</h3>
              <p className={style.habit__itemText}>{item.text}</p>
            </div>
          ))} 
        </div>
      </div>
      <CarouselProvider
        className={style.habit__slider}
        naturalSlideWidth={10}
        naturalSlideHeight={1}
        totalSlides={6}
        infinite={true}
      >
        <Slider classNameTray={style.habit__sliderTray}>
          {habitContent.map((item,index) => (
            <Slide classNameVisible={style.habit__visibleSlide} index={index} innerClassName={style.habit__innerSlide} key={index} className={style.habit__slide}>
              <div className={style.habit__img}>
                <picture>
                  <source srcSet={item.webpSrc} type="image/webp" />
                  <img src={item.jpgSrc} alt="useful elements" loading='lazy' decoding='async' />
                </picture>
              </div>
              <h3 className={style.habit__itemHeading}>{item.heading}</h3>
              <p className={style.habit__itemText}>{item.text}</p>
            </Slide>
          ))} 
        </Slider>
      </CarouselProvider>
    </section>
  )
}