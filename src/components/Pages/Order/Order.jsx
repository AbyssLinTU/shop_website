import React, { useContext, useEffect, useRef, useState } from 'react';
import { StateContext } from '../../../context/context';
import c from './Order.module.scss';
import locationIcon from './../../../img/LocationIcon.svg';
import paymentIcon from './../../../img/PaymentIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v1 } from 'uuid';
import { Tree } from '../../utils/Tree/Tree';
import { CSSTransition } from 'react-transition-group';
export const Order = () => {
  const navigate = useNavigate();
  const { state1, addIdOrder, clearOrder } = useContext(StateContext);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => {
    state1.idOrder = v1();
    addIdOrder(state1.idOrder);
    console.log(JSON.stringify(data, null, 2));
    console.log(JSON.stringify(state1.order, null, 2));
    console.log(state1.idOrder);
    clearOrder();
    reset();
    navigate('/order/complete');
  };
  const reg1 = register;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={c.wrapper}>
          <div className={c.order__container}>
            <div className={c.order__desktop}>
              <div className={c.tree}>
                <Tree title="Оформлення заказу" mb={0} mt={0} />
              </div>
              <h2 className={c.order__title}>Оформлення заказу</h2>
              <div className={c.order__content}>
                <ViewOrder
                  state1={state1}
                  navigate={navigate}
                  isValid={isValid}
                  className={c.order__view}
                />
                <div className={c.order__form}>
                  <Form register={register} errors={errors} />
                </div>

                <button
                  className={c.view__button__mobile}
                  disabled={!isValid}
                  type="submit"
                >
                  Оформити заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
const Input = ({
  text,
  value = '', // Заменим value на defaultValue
  className = '',
  register,
  name,
  errors,
  type = 'text',
  validate = {
    required: { value: true, message: 'Поле має бути заповненим' },
  },
}) => {
  const [value1, setValue1] = useState(value);
  useEffect(() => {
    setValue1(value);
  }, [value]);

  return (
    <div className={c.order__inputContainer}>
      <input
        placeholder={text}
        defaultValue={value1}
        onChange={e => setValue1(e.currentTarget.value)}
        {...register(`${name}`, {
          ...validate,
          ...(type === 'hidden' &&
            value !== '' && {
              required: { value: false, message: 'Поле має бути заповненим' },
            }),
        })}
        type={type}
        className={`${c.order__input} ${className}`}
      />
      {errors?.[name] && (
        <span className={c.order__valid}>
          {errors?.[name]?.message || 'Error'}
        </span>
      )}
    </div>
  );
};
const Form = ({ register, errors }) => {
  return (
    <div className={c.order__form}>
      <div className={`${c.form__contact} ${c.form__element}`}>
        <p className={c.element__title}>Контактна інформація</p>
        <div className={c.contact__inputs}>
          <Input
            text={"Ім'я"}
            register={register}
            name={'name'}
            errors={errors}
          />
          <Input
            text={'Призвище'}
            register={register}
            name={'nickname'}
            errors={errors}
          />
          <Input
            text={'+ 38 (0__)___-__-__'}
            register={register}
            name={'phone'}
            errors={errors}
            validate={{
              required: { value: true, message: 'Поле має бути заповненим' },
              pattern: {
                value:
                  /\+ ?380 ?\(?\d{2}\)? ?\d{3} ?-?\d{2} ?-?\d{2}|\+ ?38 ?\(?0\d{2}\)? ?\d{3} ?-?\d{2} ?-?\d{2}/,
                message: 'Некоректно отправлен телефон + 38 (0__)___-__-__',
              },
              validate: value => {
                return (
                  /^(?:\+ ?380 ?\(?\d{2}\)? ?\d{3} ?-?\d{2} ?-?\d{2}|\+ ?38 ?\(?0\d{2}\)? ?\d{3} ?-?\d{2} ?-?\d{2})?(\s*)$/.test(
                    value,
                  ) || 'Забагато символів + 38 (0__)___-__-__'
                );
              },
            }}
          />
          <Input
            className={c.email__input}
            text={'Електронна пошта'}
            register={register}
            type="email"
            name={'mail'}
            errors={errors}
            validate={{
              required: { value: true, message: 'Поле має бути заповненим' },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Некоректно записана пошта',
              },
            }}
          />
        </div>
      </div>
      <Selector
        icon={locationIcon}
        alt="location"
        title="Адреса доставки"
        text="Дніпро. Дніпропетровьска обл. 49045"
        name="address"
        register={register}
        errors={errors}
        options={[
          {
            icon: `${locationIcon}`,
            alt: 'location',
            text: 'Дніпро. Дніпропетровьска обл. 49045',
          },
          {
            icon: `${locationIcon}`,
            alt: 'location',
            text: 'Інша адресса',
          },
        ]}
      />
      <Selector
        icon={paymentIcon}
        alt="payment"
        title="Оплата"
        text="Оплата під час отримання товару"
        name="payment"
        register={register}
        errors={errors}
        options={[
          {
            icon: `${paymentIcon}`,
            alt: 'payment',
            text: 'Оплата під час отримання товару',
          },
          {
            icon: `${paymentIcon}`,
            alt: 'payment',
            text: 'Оплата зараз',
          },
          {
            icon: `${paymentIcon}`,
            alt: 'payment',
            text: 'Оплата в магазині',
          },
        ]}
      />
      <div className={`${c.form__comment} ${c.form__element}`}>
        <p className={c.comment__title}>Ваш коментар до замовлення</p>
        <Input
          className={c.comment__input}
          text={'Ваш коментар'}
          register={register}
          errors={errors}
          name={'comment'}
          validate={{}}
        />
      </div>
    </div>
  );
};
const Selector = ({
  title,
  alt,
  options,
  name = 'payment',
  register,
  errors,
}) => {
  const [active, setActive] = useState(false);
  const [iconOption, setIconOption] = useState();
  const [textOption, setTextOption] = useState();

  const handler = (icon, text) => {
    setActive(false);
    setIconOption(icon);
    setTextOption(text);
  };

  return (
    <div className={c.form__element}>
      <div className={`${c['form__' + name]} ${c.selector__main}`}>
        <div className={c.element__title}>{title}</div>
        <div className={c.element__location}>
          <div className={c[name + '__container']}>
            {!iconOption || !textOption ? (
              <span className={c.element__subtitle}>Виберіть будь-ласка</span>
            ) : (
              <>
                <img className={c.element__icon} src={iconOption} alt={alt} />
                <span className={c.element__subtitle}>{textOption}</span>
              </>
            )}
          </div>
          <div className={c.element__change}>
            <div onClick={() => setActive(prev => !prev)}>
              <LinkText text={'Змінити'} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <CSSTransition
          in={active}
          timeout={200}
          nodeRef={null}
          unmountOnExit
          mountOnEnter
          classNames={{
            enter: c.my_enter,
            enterActive: c.my_active_enter,
            exit: c.my_exit,
            exitActive: c.my_active_exit,
          }}
        >
          <div>
            {options.map((p, index) => (
              <div key={index} className={c.selector__items}>
                <div
                  className={`${c.selector__button} `}
                  onClick={() => handler(p.icon, p.text)}
                >
                  <div className={c.selector__item}>
                    <img className={c.element__icon} src={p.icon} alt={p.alt} />
                    <span className={c.element__subtitle}>{p.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
        <Input
          type="hidden"
          register={register}
          name={name}
          errors={errors}
          value={textOption ? textOption : ''}
        />
      </div>
    </div>
  );
};

const ProductBlock = ({ product }) => {
  const { removeOrder } = useContext(StateContext);

  return (
    <>
      <div className={c.product}>
        {product.img && <img src={product.img} className={c.product__image} />}
        <div>
          {product.amount > 1 && <span>{product.amount}x </span>}
          <span className={c.product__name}>{product.name}</span>
          <span> - {product.price}₴</span>
        </div>
        <button
          className={c.product__button}
          onClick={() => {
            removeOrder(product.id);
          }}
        ></button>
      </div>
    </>
  );
};
const LinkText = ({ text, onClick, className = '' }) => {
  return (
    <span onClick={onClick} className={`${c.link} ${className}`}>
      {text}
    </span>
  );
};
const ViewOrder = ({ state1, navigate, isValid }) => {
  return (
    <div className={c.order__view}>
      <p className={c.view__title}>Ваше замовлення</p>
      <p className={c.view__subtitle}>Продавець: БМ Shop</p>
      <div className={c.product__list}>
        {state1.order.map(or => (
          <ProductBlock key={or.id} product={or} />
        ))}
      </div>

      <div className={c.view__params}>
        <LinkText
          className={c.view__link}
          onClick={() => {
            navigate('/basket');
          }}
          text={'Редагувати товари'}
        />

        <div className={c.view__count}>
          <p>
            {state1.order.reduce((total, order) => total + order.amount, 0)}{' '}
            товар на суму:
          </p>
          <p>
            {state1.order.reduce((total, order) => total + order.total, 0)} ₴
          </p>
        </div>
        <div className={c.view__count}>
          <span>Вартість доставки:</span>
          <span className={c.view__tarif}>за тарифами перевізника</span>
        </div>
        <div className={c.view__count}>
          <p>Промокоди</p>
          <label className={c.view__add}>
            <button className={c.add__button}>+</button>
            <span className={c.add__title}>Додати</span>
          </label>
        </div>
        <div className={c.view__payment}>
          <p>До сплати</p>
          <p className={c.view__sum}>
            {state1.order.reduce((total, order) => total + order.total, 0)} ₴
          </p>
        </div>
        <button className={c.view__button} disabled={!isValid} type="submit">
          Оформити заказ
        </button>
      </div>
    </div>
  );
};
