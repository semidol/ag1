import { Trans, useTranslation } from 'react-i18next';
import style from './benefitsSection.module.scss';
import benefits1 from './img/benefits1.webp';
import benefits2 from './img/benefits2.jpg';
import benefits3 from './img/benefits3.webp';
import benefits4 from './img/benefits4.jpg';
import benefits5 from './img/benefits5.webp';
import benefits6 from './img/benefits6.jpg';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';

export default function BenefitsSection() {
  const {t} = useTranslation();
  return (
    <section className={style.benefits}>
      <div className={["container", style.benefits__wrapper].join(' ')}>
        <div className={style.benefits__left}>
          <h2 className={style.benefits__heading}>{t('homepage.benefitsSection.heading')}</h2>
          <div className={style.benefits__items}>
            <div className={style.benefitsItem}>
              <div className={style.benefitsItem__icon}>
                <img src={icon1} alt="icon" />
              </div>
              <div className={style.benefitsItem__content}>
                <h3 className={style.benefitsItem__heading}>{t('homepage.benefitsSection.item1.heading')}</h3>
                <p className={style.benefitsItem__text}>
                  <Trans i18nKey={'homepage.benefitsSection.item1.text'}></Trans>
                </p>
              </div>
            </div>
            <div className={style.benefitsItem}>
              <div className={style.benefitsItem__icon}>
                <img src={icon2} alt="icon" />
              </div>
              <div className={style.benefitsItem__content}>
                <h3 className={style.benefitsItem__heading}>{t('homepage.benefitsSection.item2.heading')}</h3>
                <p className={style.benefitsItem__text}>
                <Trans i18nKey={'homepage.benefitsSection.item2.text'}></Trans>
                </p>
              </div>
            </div>
            <div className={style.benefitsItem}>
              <div className={style.benefitsItem__icon}>
                <img src={icon3} alt="icon" />
              </div>
              <div className={style.benefitsItem__content}>
                <h3 className={style.benefitsItem__heading}>{t('homepage.benefitsSection.item3.heading')}</h3>
                <p className={style.benefitsItem__text}>
                  <Trans i18nKey={'homepage.benefitsSection.item3.text'}></Trans>
                </p>
              </div>
            </div>
            <div className={style.benefitsItem}>
              <div className={style.benefitsItem__icon}>
                <img src={icon4} alt="icon" />
              </div>
              <div className={style.benefitsItem__content}>
                <h3 className={style.benefitsItem__heading}>{t('homepage.benefitsSection.item4.heading')}</h3>
                <p className={style.benefitsItem__text}>
                  <Trans i18nKey={'homepage.benefitsSection.item4.text'}></Trans>  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.benefits__right}>
          <picture>
            <source srcSet={benefits1} type="image/webp" media="(min-width:1440px)" />
            <source srcSet={benefits2} media="(min-width:1440px)" />
            <source srcSet={benefits3} media="(min-width:768px)" />
            <source srcSet={benefits4} type="image/webp" media="(max-width:767px)" />
            <source srcSet={benefits5} media="(max-width:767px)" />
            <source srcSet={benefits6} type="image/webp" media="(min-width:768px)" />
            <img alt="women with AG1" loading="lazy" src={benefits3} decoding="async" />
          </picture>
        </div>
      </div>
    </section>
  )
}