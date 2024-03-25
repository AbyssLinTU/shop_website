import React from 'react';
import c from './Footer.module.scss';
import Visa from './../../img/Visa.svg';
import MasterCard from './../../img/MasterCard.svg';
export const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.top__footer}>
        <div className={c.container}>
          <div className={c.top__flex}>
            <div className={c.footer__menu}>
              <div className={`${c.menu__component} ${c.menu__component_1}`}>
                <span>Служба підтримки:</span>
                <span>+38(068) 371-36-50</span>
                <span>ул.Шевченко, 45</span>
                <span>Київська область, 07300 Україна</span>
              </div>
              <div className={`${c.menu__component} ${c.menu__component_2}`}>
                <span>Оплата</span>
                <span>Доставка</span>
                <span>Каталог</span>
              </div>
              <div className={`${c.menu__component} ${c.menu__component_4}`}>
                <span>О нас</span>
                <span>Відгуки</span>
              </div>
              <div className={`${c.menu__component} ${c.menu__component_3}`}>
                <span>Питання і відповіді</span>
                <span>Повернення та обмін</span>
              </div>
            </div>
            <div className={c.social__network}>
              <span>“Divan” в соц. мережах</span>
              <div className={c.icons}>
                <div className={c.icon_facebook}></div>
                <div className={c.icon_instagram}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={c.bottom__footer}>
        <div className={c.container}>
          <div className={c.bottom__flex}>
            <p className={c.span__c}>© 2010–2023 Магазин “Divan”</p>
            <div className={c.bottom__box}>
              <span className={c.gray}>Ціни вказани не враховуючи НДС</span>
              <div className={c.images}>
                <div>
                  <img src={Visa} alt="" />
                </div>
                <div>
                  <img src={MasterCard} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
