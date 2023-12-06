import style from './peopleSection.module.scss';
import img11 from './img/img1.webp';
import img12 from './img/img1.jpg';
import img21 from './img/img2.webp';
import img22 from './img/img2.jpg';
import img31 from './img/img3.webp';
import img32 from './img/img3.jpg';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';

export default function PeopleSection() {
  const content = [
    {
      img1: img11,
      img2: img12,
      name: 'Andrew Huberman',
      regalia: 'Neuroscientist, Host of the Huberman Lab Podcast',
      quote: '“I’ve been using AG1 by Athletic Greens since 2012 because it’s the simplest, most straightforward way for me to get my basis of important vitamins, minerals, and other high-quality ingredients like bacterial cultures and botanicals..”',
    },
    {
      img1: img21,
      img2: img22,
      name: 'Robin Arzón',
      regalia: 'Head Instructor, Author of Shut Up & Run',
      quote: '“I’m always looking for ways to level up and improve my performance. AG1 allows me to keep up with the daily hustle that being a new Mom, busy executive, and athlete requires. I have more energy and recover faster after a tough workout because of this product...”',
    },
    {
      img1: img31,
      img2: img32,
      name: 'Lewis Hamilton',
      regalia: 'Seven-time Formula 1 Champion',
      quote: '“I’ve been drinking AG1 by Athletic Greens every single day for a few years and it’s become a key part of my routine. As a daily clean, green support of my energy - it tastes great, is convenient to take on the road, and is complete enough to be an all-in-one supplement. I love that it’s a really easy way to support my health.”',
    },
  ]
  return (
    <section className={style.section}>
      <div className='container'>
        <h2 className={style.heading}>Recommended by top health experts & performers</h2>
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