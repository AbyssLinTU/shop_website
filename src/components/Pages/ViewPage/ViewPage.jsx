import React, { useContext, useEffect, useState } from 'react';
import { Offers } from '../../utils/Offers/Offers';
import { StateContext } from '../../../context/context';
import { useParams } from 'react-router-dom';
import { Tree } from '../../utils/Tree/Tree';
import c from './ViewPage.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperView } from './SwiperView';
import { TabBar } from '../../utils/TabBar/TabBar';
import { DropDownMenu } from '../../utils/DropDownMenu/DropDownMenu';

export const ViewPage = () => {
  const [added, setAdded] = useState(false);
  const [product, setProduct] = useState({});
  const { state1, addOrder } = useContext(StateContext);
  const { id } = useParams();

  useEffect(() => {
    setAdded(false);
    const fetchedProduct = state1.product.find(p => p.id === parseInt(id));
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
  }, [id, state1.product]);
  const handleAddToBasket = () => {
    if (
      product &&
      !state1.order.some(orderProduct => orderProduct.id === product.id)
    ) {
      setAdded(true);
      addOrder(product);
    }
  };
  return (
    <div className={c.viewpage}>
      <div className={c.tree}>
        <Tree title={product.name} mb={0} mt={0} />
      </div>
      <div className={c.view}>
        <div className={c.images}>
          {product.photo && (
            <img className={c.view__image} src={product.photo.main} alt="" />
          )}
          {product.photo && (
            <img
              className={c.view__image}
              src={product.photo.display1}
              alt=""
            />
          )}
          {product.photo && (
            <img
              className={c.view__image}
              src={product.photo.display2}
              alt=""
            />
          )}
          {product.photo && (
            <img
              className={c.view__image}
              src={product.photo.display3}
              alt=""
            />
          )}
        </div>
        {product.photo && <SwiperView product={product} />}
        <div className={c.product__info2}>
          <div className={c.product__info}>
            <div>
              <div className={c.product__name}>{product.name}</div>
              <div className={c.product__title}>{product.title}</div>
            </div>

            <div className={c.product__sale}>{product.sale} ₴</div>

            <button
              className={
                state1.order.some(
                  orderProduct => orderProduct.id === product.id,
                ) || added
                  ? c.added__button
                  : c.add__button
              }
              onClick={handleAddToBasket}
            >
              {state1.order.some(
                orderProduct => orderProduct.id === product.id,
              ) || added
                ? 'Додано у кошик'
                : 'Додати у кошик'}
            </button>
          </div>
          <div className={c.input__colors}>
            <p className={c.input__text}>Колір:</p>
            <div className={`${c.texture} ${c.texture_1}`}></div>
            <div className={`${c.texture} ${c.texture_2}`}></div>
            <div className={`${c.texture} ${c.texture_3}`}></div>
            <div className={`${c.texture} ${c.texture_4}`}></div>
            <div className={`${c.texture} ${c.texture_5}`}></div>
            <div className={`${c.texture} ${c.texture_6}`}></div>
            <div className={`${c.texture} ${c.texture_7}`}></div>
          </div>
        </div>
      </div>
      <div className={c.view__mobile}>
        <div className={c.mobile__info}>
          <div>
            <div className={c.mobile__name}>{product.name}</div>
            <div className={c.mobile__title}>{product.title}</div>
          </div>
          <div className={c.mobile__sale}>{product.sale} ₴</div>
        </div>

        {product.photo && (
          <div className={c.mobile__swiper}>
            <SwiperView product={product} />
          </div>
        )}
        <div className={c.mobile__colors}>
          <p className={c.mobile__text}>Колір:</p>
          <div className={`${c.texture} ${c.texture_1}`}></div>
          <div className={`${c.texture} ${c.texture_2}`}></div>
          <div className={`${c.texture} ${c.texture_3}`}></div>
          <div className={`${c.texture} ${c.texture_4}`}></div>
          <div className={`${c.texture} ${c.texture_5}`}></div>
          <div className={`${c.texture} ${c.texture_6}`}></div>
          <div className={`${c.texture} ${c.texture_7}`}></div>
        </div>
        <button
          className={
            state1.order.some(orderProduct => orderProduct.id === product.id) ||
            added
              ? c.added__mobile
              : c.add__mobile
          }
          onClick={handleAddToBasket}
        >
          {state1.order.some(orderProduct => orderProduct.id === product.id) ||
          added
            ? 'Додано у кошик'
            : 'Додати у кошик'}
        </button>
      </div>
      <div className={c.product__description}>
        <div className={c.container}>
          <div className={c.description__grid}>
            <TabBar />
            {product.photo && (
              <img
                className={c.description__image}
                src={product.photo.main}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <div className={c.product__descriptionMobile}>
        <DropDownMenu type="view" text="Опис">
          <div className={c.text_bar}>
            <p>
              Компактный диван БАЛИ с раскладкой вперед позволит вам сэкономить
              пространство дома и отлично впишется даже в небольшую комнату. При
              этом вы получите просторное спальное место, которое может быть
              выполнено в одном из 4-х размеров на ваш выбор:
            </p>
            <p>
              В основе дивана – выкатной механизм трансформации: ящик для белья
              выдвигается вперед и на него по принципу «книжки» раскладывается
              мягкая часть дивана. Неподвижная нижняя часть матраса расположена
              на раме с ламелями из бука и состоит из слоев пенополиуретана.
              Верхняя «откидная» часть матраса содержит пружинный блок Боннель и
              слои пенополиуретана.
            </p>
            <p>
              Просторий ящик для білизни (викочування) обладнаний роликами зі
              спеціальним покриттям для захисту поверхні підлоги та аераторами –
              спеціальними отворами для циркуляції повітря. Каркас дивана
              виконаний із натурального дерева – берези.
            </p>
          </div>
        </DropDownMenu>

        <DropDownMenu type="view" text="Доставка і оплата">
          <div className={c.text_bar}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              consectetur laborum quibusdam aperiam deserunt voluptatibus, animi
              natus harum, tempora consequatur possimus ullam laboriosam officia
              quam ipsum quidem. Vel, fugit earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus
              illo, voluptate laboriosam aliquam impedit id rem at quaerat
              molestias! Dolore blanditiis, soluta beatae ea rerum libero,
              dolorem sequi facere, ad nemo ipsa? Quas, voluptatibus?
              Praesentium delectus, ipsa voluptatum alias iure nam dolore!
              Similique tenetur iure eaque dolor a eveniet minus unde obcaecati
              voluptatem, eligendi ad corporis. Aperiam, eum sapiente!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem alias cumque voluptatum, animi maiores cupiditate.
              Incidunt.
            </p>
          </div>
        </DropDownMenu>
        <DropDownMenu type="view" text="Характеристики">
          <div className={c.text_bar}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              saepe unde reprehenderit corporis ratione impedit nesciunt
              adipisci! Sunt nihil qui unde, iure fuga minus architecto,
              voluptate, reiciendis provident temporibus veniam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              corporis debitis! Totam aut illo quam suscipit commodi dolores, id
              nam nobis minus ea quidem quaerat, eius fugiat vitae
              exercitationem dignissimos ratione doloremque pariatur earum,
              porro dolore voluptatum eum? Facere, quia.
            </p>
          </div>
        </DropDownMenu>
      </div>
      <Offers product={state1.product} type="new" title="Нові моделі" />
      <Offers
        product={state1.product}
        type="popular"
        title="Популярні моделі"
      />
    </div>
  );
};
