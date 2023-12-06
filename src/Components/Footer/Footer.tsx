import style from './footer.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import {ReactComponent as Icon1} from './img/icon1.svg';
import {ReactComponent as Icon2} from './img/icon2.svg';
import {ReactComponent as Icon3} from './img/icon3.svg';
import {ReactComponent as Icon4} from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';

export default function Footer() {
  const [isOpenShop, setIsOpenShop] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  return (
    <footer className={style.footer}>
        <div className={style.wrapper}>
          <div className={style.section1}>
            <div className={style.lists}>
              <div className={style.listBlock}>
                <h3 onClick={windowWidth >= 1440 ? undefined : () => setIsOpenShop(!isOpenShop)} className={isOpenShop ? [style.listHeading, style.active].join(' ') : style.listHeading}>SHOP</h3>
                <Collapse isOpened={isOpenShop || windowWidth >= 1440}>
                  <ul className={style.list}>
                    <li className={style.listItem}><a className={style.listLink} href="#">The Pouch</a></li>
                    <li className={style.listItem}><a className={style.listLink} href="#">Travel Packs</a></li>
                  </ul>
                </Collapse>
              </div>
              <div className={style.listBlock}>
                <h3 onClick={windowWidth >= 1440 ? undefined : () => setIsOpenAbout(!isOpenAbout)} className={isOpenAbout ? [style.listHeading, style.active].join(' ') : style.listHeading}>ABOUT</h3>
                <Collapse isOpened={isOpenAbout || windowWidth >= 1440}>
                  <ul className={style.list}>
                    <li className={style.listItem}><a className={style.listLink} href="#">About Us</a></li>
                  </ul>
                </Collapse>
              </div>
              <div className={windowWidth >= 1440 ? undefined : style.listBlock}>
                <h3 onClick={() => setIsOpenContact(!isOpenContact)} className={isOpenContact ? [style.listHeading, style.active].join(' ') : style.listHeading}>CONTACT</h3>
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
                <h3 className={style.connectHeading}>CONNECT</h3>
                <p className={style.join}>Join Our Newsletter</p>
                <form className={style.inputBlock} action="">
                  <input className={style.input} placeholder='Your Email' type="text" />
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
              <p className={style.attention}>* Food supplements are not a substitute for a balanced and varied diet and a healthy lifestyle. Do not exceed the indicated daily intake. Keep out of reach of children. Please inform and consult your doctor before consuming this product. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women. Refrain from taking other food supplements containing zinc. Persons taking anticoagulant medication should seek medical advice before consuming vitamin K-containing supplements.</p>
              <p className={style.note}>1: Vitamins C, B6 and B12, thiamine, riboflavin, niacin, biotin, pantothenic acid, phosphorus and copper contribute to normal energy-yielding metabolism.</p>
              <p className={style.note}>2: Vitamins C, B6 and B12, riboflavin, niacin, pantothenic acid and folate contribute to the reduction of tiredness and fatigue. Vitamins C, B6 and B12, thiamine, niacin, biotin and folate contribute to normal psychological function. Pantothenic acid contributes to normal mental performance. Zinc contributes to normal cognitive function.</p>
              <p className={style.note}>3: Vitamins A, C, B6 and B12, folate, zinc, copper and selenium contribute to the normal function of the immune system.</p>
              <p className={style.note}>4: Vitamins E and C, riboflavin, zinc, copper and selenium help to protect the bodies cells against oxidative stress</p>
              <p className={style.note}>5: Vitamin K, phosphorus and zinc contribute to the maintenance of normal bones. Vitamin C contributes to normal collagen formation for the normal function of bones.</p>
              <p className={style.note}>6: Thiamine contributes to the normal function of the heart.</p>
              <p className={style.note}>7: Vitamin A, riboflavin, niacin, biotin and zinc contribute to the maintenance of normal skin. Vitamin C contributes to normal collagen formation for the normal function of skin. Copper contributes to normal skin pigmentation and maintenance of normal connective tissues. Zinc and selenium contribute to the maintenance of normal nails.</p>
              <p className={style.note}>8: Chromium contributes to the maintenance of normal blood glucose levels.</p>
              <p className={style.note}>9: Pantothenic acid contributes to normal synthesis and metabolism of steroid hormones, vitamin D and some neurotransmitters. Vitamin B6 contributes to the regulation of hormonal activity. Zinc contributes to the maintenance of normal testosterone levels in the blood and to normal fertility and reproduction. Selenium contributes to the normal thyroid function and to normal spermatogenesis.</p>
            </div>
            <div className={style.settings}>
              <div className={style.param}>English</div>
              <div className={style.settingsDivider}></div>
              <div className={style.param}>€ Euro (EUR)</div>
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
              <div className={style.param}>English</div>
              <div className={style.settingsDivider}></div>
              <div className={style.param}>€ Euro (EUR)</div>
            </div>
          </div>}
          {windowWidth < 1440 && <div className={style.divider}></div>}
          {windowWidth < 1440 &&<div className={style.section5}>
            <div className={style.notes}>
              <p className={style.attention}>* Food supplements are not a substitute for a balanced and varied diet and a healthy lifestyle. Do not exceed the indicated daily intake. Keep out of reach of children. Please inform and consult your doctor before consuming this product. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women. Refrain from taking other food supplements containing zinc. Persons taking anticoagulant medication should seek medical advice before consuming vitamin K-containing supplements.</p>
              <p className={style.note}>1: Vitamins C, B6 and B12, thiamine, riboflavin, niacin, biotin, pantothenic acid, phosphorus and copper contribute to normal energy-yielding metabolism.</p>
              <p className={style.note}>2: Vitamins C, B6 and B12, riboflavin, niacin, pantothenic acid and folate contribute to the reduction of tiredness and fatigue. Vitamins C, B6 and B12, thiamine, niacin, biotin and folate contribute to normal psychological function. Pantothenic acid contributes to normal mental performance. Zinc contributes to normal cognitive function.</p>
              <p className={style.note}>3: Vitamins A, C, B6 and B12, folate, zinc, copper and selenium contribute to the normal function of the immune system.</p>
              <p className={style.note}>4: Vitamins E and C, riboflavin, zinc, copper and selenium help to protect the bodies cells against oxidative stress</p>
              <p className={style.note}>5: Vitamin K, phosphorus and zinc contribute to the maintenance of normal bones. Vitamin C contributes to normal collagen formation for the normal function of bones.</p>
              <p className={style.note}>6: Thiamine contributes to the normal function of the heart.</p>
              <p className={style.note}>7: Vitamin A, riboflavin, niacin, biotin and zinc contribute to the maintenance of normal skin. Vitamin C contributes to normal collagen formation for the normal function of skin. Copper contributes to normal skin pigmentation and maintenance of normal connective tissues. Zinc and selenium contribute to the maintenance of normal nails.</p>
              <p className={style.note}>8: Chromium contributes to the maintenance of normal blood glucose levels.</p>
              <p className={style.note}>9: Pantothenic acid contributes to normal synthesis and metabolism of steroid hormones, vitamin D and some neurotransmitters. Vitamin B6 contributes to the regulation of hormonal activity. Zinc contributes to the maintenance of normal testosterone levels in the blood and to normal fertility and reproduction. Selenium contributes to the normal thyroid function and to normal spermatogenesis.</p>
            </div>
          </div>}
        </div>
    </footer>
  )
}