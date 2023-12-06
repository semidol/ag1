import style from './homepage.module.scss';
import bgVideo from './img/bg.mp4';
import { ReactComponent as Arrow } from './img/arrow.svg';
import { ReactComponent as Logo } from './img/logo.svg';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import benefits1 from './img/benefits1.webp';
import benefits2 from './img/benefits2.jpg';
import benefits3 from './img/benefits3.webp';
import benefits4 from './img/benefits4.jpg';
import benefits5 from './img/benefits5.webp';
import benefits6 from './img/benefits6.jpg';
import icon5 from './img/icon5.svg';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
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
import PeopleSection from './PeopleSection/PeopleSection';

export default function Homepage() {
  const [isPouch, setIsPouch] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenPortal, setIsOpenPortal] = useState(false);

  const habitContent = [
    {
      webpSrc: habit11,
      jpgSrc: habit12,
      heading: 'Vitamins',
      text: <>Vitamins are vital for good health. Together with minerals, they are involved in countless processes in the body: from the immune system<span className={style.habit__note}>3</span> to energy metabolism<span className={style.habit__note}>1</span> to mental fitness<span className={style.habit__note}>2</span>.</>
    },
    {
      webpSrc: habit21,
      jpgSrc: habit22,
      heading: 'Minerals',
      text: <>Minerals, together with vitamins, enzymes and hormones, are essential for building tissues<span className={style.habit__note}>7</span>, cells<span className={style.habit__note}>4</span>, bones, teeth<span className={style.habit__note}>5</span> and for a range of metabolic processes<span className={style.habit__note}>1</span>.</>
    },
    {
      webpSrc: habit31,
      jpgSrc: habit32,
      heading: 'Bacterial cultures & botanicals',
      text: <>AG1 is so much more than a multivitamin. Besides vitamins and minerals, each serving contains bacterial cultures, botanicals, and other whole-food sourced ingredients.</>
    },
    {
      webpSrc: habit41,
      jpgSrc: habit42,
      heading: 'Focus & Cell Protection',
      text: <>Over 650 muscles move you every day - and your brain directs them at the right time. AG1 supports both: muscle recovery<span className={style.habit__note}>4</span> and mental fitness<span className={style.habit__note}>2</span>.</>
    },
    {
      webpSrc: habit51,
      jpgSrc: habit52,
      heading: 'Immune support',
      text: <>To be at your best every day, you need a strong immune system. AG1 is the daily habit that supports this core health function<span className={style.habit__note}>3</span>.</>
    },
    {
      webpSrc: habit61,
      jpgSrc: habit62,
      heading: 'Energy & hormonal balance',
      text: <>The energy-yielding metabolism makes sure that you have energy when and where you need it. And your endocrine system regulates a wide variety of bodily functions, from appetite to reproduction. AG1 supports both<span className={style.habit__note}>1,9</span>.</>
    }
  ]

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth)
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
    <main>
      <section className={style.cover}>
        <div className={style.cover__video}>
          <video src={bgVideo} autoPlay muted loop>
          </video>
        </div>
        <div className={style.cover__content}>
          <h1 className={style.cover__heading}>Once a Day, Every Day</h1>
          <p className={style.cover__text}>The science-driven blend of vitamins, minerals, good bacteria, and whole food sourced ingredients.</p>
          <button className={style.cover__btn}>Get Your AG1<Arrow /></button>
        </div>
      </section>
      <section className={style.benefits}>
        <div className={["container", style.benefits__wrapper].join(' ')}>
          <div className={style.benefits__left}>
            <h2 className={style.benefits__heading}>Benefits of daily use</h2>
            <div className={style.benefits__items}>
              <div className={style.benefitsItem}>
                <div className={style.benefitsItem__icon}>
                  <img src={icon1} alt="icon" />
                </div>
                <div className={style.benefitsItem__content}>
                  <h3 className={style.benefitsItem__heading}>Wellbeing & Foundational Health</h3>
                  <p className={style.benefitsItem__text}>AG1 supports your body as holistically as possible: skin, hair, nails<span className={style.benefitsItem__note}>7</span>, hormonal balance<span className={style.benefitsItem__note}>9</span>, mental performance<span className={style.benefitsItem__note}>2</span> and more.</p>
                </div>
              </div>
              <div className={style.benefitsItem}>
                <div className={style.benefitsItem__icon}>
                  <img src={icon2} alt="icon" />
                </div>
                <div className={style.benefitsItem__content}>
                  <h3 className={style.benefitsItem__heading}>Immune system</h3>
                  <p className={style.benefitsItem__text}>Your daily dose of zinc, selenium, folate, vitamin C and more support your immune system<span className={style.benefitsItem__note}>3</span>.</p>
                </div>
              </div>
              <div className={style.benefitsItem}>
                <div className={style.benefitsItem__icon}>
                  <img src={icon3} alt="icon" />
                </div>
                <div className={style.benefitsItem__content}>
                  <h3 className={style.benefitsItem__heading}>Steady energy</h3>
                  <p className={style.benefitsItem__text}>AG1 provides nutrients that make sure the energy gets to where you really need it<span className={style.benefitsItem__note}>1</span>.</p>
                </div>
              </div>
              <div className={style.benefitsItem}>
                <div className={style.benefitsItem__icon}>
                  <img src={icon4} alt="icon" />
                </div>
                <div className={style.benefitsItem__content}>
                  <h3 className={style.benefitsItem__heading}>Helps recovery</h3>
                  <p className={style.benefitsItem__text}>Curated ingredients help to protect your cells against oxidative stress<span className={style.benefitsItem__note}>4</span>.</p>
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
      <section className={style.buy}>
        <div className="container">
          <div className={style.buyTop}>
            <div className={style.buyTop__content}>
              <Logo className={style.buyTop__logo} />
              <p className={style.buyTop__text}>Vitamins, minerals, good bacteria, and whole food sourced ingredients in one convenient daily serving. One scoop, 250–350&nbsp;ml of cold water. Once a day, every day.</p>
              <div className={style.buyTop__switcher}>
                <div className={style.buyTop__choose} onClick={() => {setIsPouch(true)}}>The Pouch</div>
                <div
                  className={isPouch ? style.buyTop__toggle : [style.buyTop__toggle, style.active].join(' ')}
                  onClick={() => setIsPouch(!isPouch)}
                >
                </div>
                <div className={style.buyTop__choose} onClick={() => {setIsPouch(false)}}>Travel Packs</div>
              </div>
            </div>
            <div className={style.buyTop__cards}>
              <div className={style.buyTop__card}>
                <h3 className={style.buyTop__heading}>One Time Purchase</h3>
                <div className={style.buyTop__priceBlock}>
                  <div className={style.buyTop__price}>{isPouch ? '€107' : '€117'}</div>
                </div>
                <div className={style.buyTop__serving}>{isPouch ? '€3.57' : '€3.90'} Per Serving</div>
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
                <button className={style.buyTop__btn}>Buy Now</button>
                <div className={style.buyTop__about}>Try out AG1:</div>
                <ul className={style.buyTop__list}>
                  <li className={style.buyTop__listItem}>
                    {isPouch ? '30 Servings of AG1 in a Single Pouch' : '30 Individual Servings of AG1'}
                  </li>
                  <li className={style.buyTop__listItem}>Ships Once</li>
                </ul>
              </div>
              <div className={style.buyTop__card}>
                <div className={style.buyTop__mostBest}>Most Popular</div>
                <h3 className={style.buyTop__heading}>Single Subscription</h3>
                <div className={style.buyTop__priceBlock}>
                  <div className={style.buyTop__save}>You save <span className={style.buyTop__savePercent}>20%</span></div>
                  <div className={style.buyTop__discount}>{isPouch ? '€107' : '€117'}</div>
                  <div className={style.buyTop__price}>{isPouch ? '€87' : '€97'}</div>
                </div>
                <div className={style.buyTop__serving}>{isPouch ? '€2.90' : '€3.23'} Per Serving</div>
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
                <button className={style.buyTop__btn}>Buy Now</button>
                <div className={style.buyTop__about}>Best for starting your new healthy habit:</div>
                <ul className={style.buyTop__list}>
                  <li className={style.buyTop__listItem}>30 Individual Servings of AG1</li>
                  <li className={style.buyTop__listItem}>Delivered Monthly</li>
                  <li className={style.buyTop__listItem}>Free Starter Kit: Shaker</li>
                  <li className={style.buyTop__listItem}>No Commitment, Pause or Cancel Anytime</li>
                </ul>
              </div>
              <div className={style.buyTop__card}>
                <div className={style.buyTop__mostBest}>Best Value</div>
                <h3 className={style.buyTop__heading}>Double Subscription</h3>
                <div className={style.buyTop__priceBlock}>
                  <div className={style.buyTop__save}>You save <span className={style.buyTop__savePercent}>30%</span></div>
                  <div className={style.buyTop__discount}>{isPouch ? '€214' : '€234'}</div>
                  <div className={style.buyTop__price}>{isPouch ? '€167' : '€177'}</div>
                </div>
                <div className={style.buyTop__serving}>{isPouch ? '€2.78' : '€2.95'} Per Serving</div>
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
                <button className={style.buyTop__btn}>Buy Now</button>
                <div className={style.buyTop__about}>Best for 2 daily drinkers:</div>
                <ul className={style.buyTop__list}>
                  <li className={style.buyTop__listItem}>{isPouch ? '60 Servings of AG1 in Two Pouches' : '60 Individual Servings of AG1'}</li>
                  <li className={style.buyTop__listItem}>Delivered Monthly</li>
                  <li className={style.buyTop__listItem}>{isPouch ? 'Free Starter Kit: Premium Jar & Two Shakers' : 'Free Starter Kit: Two Shakers'}</li>
                  <li className={style.buyTop__listItem}>No Commitment, Pause or Cancel Anytime</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.buy__line}></div>
          <div className={style.buyBottom}>
            <div className={style.buyBottom__content}>
              <h3 className={style.buyBottom__heading}>CLEAN. MADE WITH CARE.</h3>
              <p className={style.buyBottom__text}>No artificial flavors, colors and preservatives.</p>
            </div>
            <div className={style.buyBottom__free}>
              <div className={style.buyBottom__item}>
                <div className={style.buyBottom__icon}>
                  <img src={icon5} alt="icon" />
                </div>
                <div className={style.buyBottom__slogan}>GLUTEN FREE</div>
              </div>
              <div className={style.buyBottom__item}>
                <div className={style.buyBottom__icon}>
                  <img src={icon5} alt="icon" />
                </div>
                <div className={style.buyBottom__slogan}>NO EGGS</div>
              </div>
              <div className={style.buyBottom__item}>
                <div className={style.buyBottom__icon}>
                  <img src={icon5} alt="icon" />
                </div>
                <div className={style.buyBottom__slogan}>NO SUGAR ADDED</div>
              </div>
              <div className={style.buyBottom__item}>
                <div className={style.buyBottom__icon}>
                  <img src={icon5} alt="icon" />
                </div>
                <div className={style.buyBottom__slogan}>NUT FREE</div>
              </div>
              <div className={style.buyBottom__item}>
                <div className={style.buyBottom__icon}>
                  <img src={icon5} alt="icon" />
                </div>
                <div className={style.buyBottom__slogan}>DAIRY FREE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.habit}>
        <div className="container">
          <h2 className={style.habit__heading}>Say hello to your new daily habit</h2>
          <p className={style.habit__text}>One daily serving delivers not only greens (although it's green), but also essential vitamins & minerals as well as botanicals, bacterial cultures, and other whole-food sourced ingredients.</p>
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
      <section className={style.ing}>
        <div className="container">
          <div className={style.ing__block}>
            <h3 className={style.ing__heading}>One scoop. Once a day. Every day.</h3>
            <div className={style.ing__img}>
              <picture>
                <source srcSet={ing11} type="image/webp" />
                <img src={ing12} alt="glass of AG1" loading='lazy' decoding='async' />
              </picture>
            </div>
            <div className={style.ing__content}>
              <h4 className={style.ing__contentHeading}>Working in harmony</h4>
              <p className={style.ing__text}>Each of the ingredients in AG1 work together in harmony to amplify each other's effects to support foundational health and provide your high-quality daily nutrients.</p>
              <h4 className={style.ing__contentHeading}>Daily routine, made easy</h4>
              <p className={style.ing__text}>All you have to do with AG1 is mix one scoop with 10 ounces of cold water. It's something you drink once a day.</p>
              <h4 className={style.ing__contentHeading}>For just about everybody</h4>
              <p className={style.ing__text}>Optimized for athletes, lifeletes, and everyone in between. Vegan, Paleo, and Keto-friendly.</p>
            </div>
          </div>
          <div className={style.ing__block}>
            <h3 className={style.ing__heading}>We set the bar for quality</h3>
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
                <h4 onClick={windowWidth >= 768 ? undefined : () => listHandler(1)} className={activeItem === 1 ? [style.ing__contentHeading, style.active].join(' ') : style.ing__contentHeading}>Quality ingredients</h4>
                <Collapse isOpened={activeItem === 1 || windowWidth >= 768 ? true : false}>
                  <p className={style.ing__text}>Using the latest science, we select the most effective and bioavailable form of every single ingredient in AG1 to deliver the highest possible quality and value.</p>
                </Collapse>
              </div>
              <div className={style.ing__contentBlock}>
                <h4 onClick={windowWidth >= 768 ? undefined : () => listHandler(2)} className={activeItem === 2 ? [style.ing__contentHeading, style.active].join(' ') : style.ing__contentHeading}>The highest standards</h4>
                <Collapse isOpened={activeItem === 2 || windowWidth >= 768 ? true : false}>
                  <p className={style.ing__text}>AG1 is one of only a handful of products to be both NSF-certified and made in a TGA-registered facility. This means that each ingredient and every batch is tested and verified to meet the gold standard for clean ingredient nutrition, and that every individual pack is 100% traceable.</p>
                </Collapse>
              </div>
              <div className={style.ing__contentBlock}>
                <h4 onClick={windowWidth >= 768 ? undefined : () => listHandler(3)} className={activeItem === 3 ? [style.ing__contentHeading, style.active].join(' ') : style.ing__contentHeading}>52 iterations & counting</h4>
                <Collapse isOpened={activeItem === 3 || windowWidth >= 768 ? true : false}>
                  <p className={style.ing__text}>We’ve set the bar for high-quality by working with top doctors, naturopath, nutritionist and flavor experts to make 52 iterations of AG1 to-date. This allows us to constantly follow the latest science and improve the taste.</p>
                </Collapse>
              </div>
              <button onClick={() => setPortal(true)} className={style.ing__btn}>Full Ingredients List<div className={style.ing__plus}></div></button>
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
      <PeopleSection />
    </main>
  )
}