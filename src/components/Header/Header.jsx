import React, { useContext, useState } from 'react';
import c from './Header.module.scss';
import logo from './../../img/Logo.svg';
import burgerMenu from './../../img/BurgerMenu.svg';
import cancel from './../../img/Burger_Cancel.svg';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { StateContext } from '../../context/context';
import classNames from 'classnames';
export const Header = () => {
  const navigate = useNavigate();
  const { state1 } = useContext(StateContext);
  const [active, setActive] = useState(false);
  return (
    <>
      <header className={c.header}>
        <div className={c.top__header}>
          <div className={c.container}>
            <div className={c.top__flex}>
              <span>Служба підтримки: +38(068) 371-36-50</span>
              <span>Повернення та обмін</span>
            </div>
          </div>
        </div>
        <div className={c.bottom__header}>
          <div className={c.container}>
            <div className={c.bottom__flex}>
              <div className={c.burger__menu} onClick={() => setActive(true)}>
                <img src={burgerMenu} alt="Menu" />
              </div>
              <div className={c.logo_container}>
                <img
                  className={c.logo}
                  onClick={() => navigate('/main')}
                  src={logo}
                  alt=""
                />
              </div>

              <div className={c.menu}>
                <input
                  className={c.input}
                  type="text"
                  placeholder="Пошук товарів"
                />
                <div className={c.buttons}>
                  <button className={c.button}>Оплата</button>
                  <button className={c.button}>Доставка</button>
                  <button className={c.button}>Акції</button>
                  <NavLink to="/about" className={c.button}>
                    О нас
                  </NavLink>
                  <button className={c.button}>Відгуки</button>
                </div>
                <div className={c.icons}>
                  <div className={c.icon__user}></div>

                  <div
                    className={c.icon__basket}
                    onClick={() => navigate('/basket')}
                  >
                    {state1.order.length > 0 && (
                      <div className={c.basket__count}>
                        {' '}
                        {state1.order.length}{' '}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={!active ? c.mobile__menu : `${c.mobile__menu} ${c.active}`}
      >
        <div className={c.menu__box__top}>
          <div className={c.button__close} onClick={() => setActive(false)}>
            <img className={c.close__icon} src={cancel} alt="" />
          </div>

          <div className={c.input__mobile__box}>
            <input
              className={c.input__mobile}
              type="text"
              placeholder="Пошук товарів"
            />
          </div>
        </div>
        <div className={c.menu__box__bottom}>
          <div className={c.buttons__mobile}>
            <button className={c.button}>Оплата</button>
            <button className={c.button}>Доставка</button>
            <button className={c.button}>Акції</button>
            <NavLink
              to="/about"
              className={c.button}
              onClick={() => setActive(false)}
            >
              О нас
            </NavLink>
            <button className={c.button}>Відгуки</button>
          </div>
        </div>
      </div>
    </>
  );
};
