import style from './peopleSection.module.scss';
import img11 from './img/img1.webp';
import img12 from './img/img1.jpg';
import img21 from './img/img2.webp';
import img22 from './img/img2.jpg';
import img31 from './img/img3.webp';
import img32 from './img/img3.jpg';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import { useTranslation } from 'react-i18next';

export default function PeopleSection() {
  const {t} = useTranslation();
  const content = [
    {
      img1: img11,
      img2: img12,
      name: t('homepage.peopleSection.item1.name'),
      regalia: t('homepage.peopleSection.item1.regalia'),
      quote: t('homepage.peopleSection.item1.quote'),
    },
    {
      img1: img21,
      img2: img22,
      name: t('homepage.peopleSection.item2.name'),
      regalia: t('homepage.peopleSection.item2.regalia'),
      quote: t('homepage.peopleSection.item2.quote'),
    },
    {
      img1: img31,
      img2: img32,
      name: t('homepage.peopleSection.item3.name'),
      regalia: t('homepage.peopleSection.item3.regalia'),
      quote: t('homepage.peopleSection.item3.quote'),
    },
  ]
  return (
    <section className={style.section}>
      <div className='container'>
        <h2 className={style.heading}>{t('homepage.peopleSection.heading')}</h2>
        <div className={style.peopleBlock}>
          {content.map((item, index) => (
            <div key={index} className={style.item}>
              <div className={style.img}>
                <picture>
                  <source srcSet={item.img1} type='image/webp' />
                  <img src={item.img2} alt="person" loading='lazy' decoding='async' />
                </picture>
              </div>
              <div className={style.content}>
                <h3 className={style.name}>{item.name}</h3>
                <p className={style.regalia}>{item.regalia}</p>
                <p className={style.quote}>{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={10}
          totalSlides={3}
          className={style.slider}
        >
          <div className={style.dots}>
            {content.map((item, index) => (
              <Dot slide={index} key={index} className={style.dot}>
                <div className={style.thumb}>
                  <picture>
                    <source srcSet={item.img1} type='image/webp' />
                    <img src={item.img2} alt="person" loading='lazy' decoding='async' />
                  </picture>
                </div>
              </Dot>
            ))}
          </div>
          <Slider classNameTray={style.sliderTray}>
            {content.map((item, index) => (
              <Slide onFocus={() => console.log(123)} key={index} className={style.slide} index={index}>
                <div className={style.img}>
                  <picture>
                    <source srcSet={item.img1} type='image/webp' />
                    <img src={item.img2} alt="person" loading='lazy' decoding='async' />
                  </picture>
                </div>
                <div className={style.content}>
                  <h3 className={style.name}>{item.name}</h3>
                  <p className={style.regalia}>{item.regalia}</p>
                  <p className={style.quote}>{item.quote}</p>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  )
}