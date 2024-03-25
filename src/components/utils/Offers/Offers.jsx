import React, { useRef } from 'react';
import { ModelItem } from '../ModelItem/ModelItem';
import c from './Offers.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import '../../../App.scss';
import { v1 } from 'uuid';

export const Offers = ({ product, type, title }) => {
  const prev = useRef(v1());
  const next = useRef(v1());

  const filteredProducts = product.filter(p => p.type.includes(type));

  return (
    <div className={c.wrapper}>
      <div className={c.main}>
        <div className={c.title}>{title}</div>
        <div className={c.buttons}>
          <button className={`${c.prev}_${prev.current} ${c.prev}`}></button>
          <button className={`${c.next}_${next.current} ${c.next}`}></button>
        </div>
      </div>

      <Swiper
        style={{ padding: '0 auto' }}
        modules={[Grid, Navigation, Pagination]}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 32,
            navigation: true,
            pagination: {
              dynamicBullets: true,
              dynamicMainBullets: 1,
              clickable: false,
            },
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 32,
            navigation: true,
            pagination: {
              dynamicBullets: true,
              dynamicMainBullets: 3,
              clickable: false,
            },
          },
          680: {
            slidesPerView: 2,
            spaceBetween: 32,
            navigation: {
              prevEl: `.${c.prev}_${prev.current}`,
              nextEl: `.${c.next}_${next.current}`,
            },
            pagination: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
            navigation: {
              prevEl: `.${c.prev}_${prev.current}`,
              nextEl: `.${c.next}_${next.current}`,
            },
            pagination: false,
          },
          1240: {
            spaceBetween: 32,
            slidesPerView: 4,
            navigation: {
              prevEl: `.${c.prev}_${prev.current}`,
              nextEl: `.${c.next}_${next.current}`,
            },
            pagination: false,
          },
        }}
      >
        {filteredProducts.map(p => (
          <SwiperSlide key={p.id} style={{ padding: '0 auto' }}>
            <ModelItem
              name={p.name}
              title={p.title}
              id={p.id}
              sale={p.sale}
              cost={p.cost}
              photo={p.photo.main}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
