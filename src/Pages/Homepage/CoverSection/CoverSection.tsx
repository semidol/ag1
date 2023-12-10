import style from './coverSection.module.scss';
import bgVideo from './img/bg.mp4';
import { ReactComponent as Arrow } from './img/arrow.svg';
import { useTranslation } from 'react-i18next';
import bg1 from './img/bg.webp';
import bg2 from './img/bg.jpg';

export default function CoverSection() {
  const {t} = useTranslation();
  return (
    <section className={style.cover}>
      <div className={style.cover__video}>
        <video src={bgVideo} autoPlay muted loop>
        </video>
      </div>
      <div className={style.cover__img}>
        <picture>
          <source srcSet={bg1} type='image/webp'></source>
          <img src={bg2} loading='lazy' decoding='async' alt="product AG1" />
        </picture>
      </div>
      <div className={style.cover__content}>
        <h1 className={style.cover__heading}>{t('homepage.coverSection.heading')}</h1>
        <p className={style.cover__text}>{t('homepage.coverSection.text')}</p>
        <button className={style.cover__btn}>{t('homepage.coverSection.btn')}<Arrow /></button>
      </div>
    </section>
  )
}