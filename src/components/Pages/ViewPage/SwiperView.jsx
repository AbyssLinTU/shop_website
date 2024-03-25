import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import c from './ViewPage.module.scss';
export const SwiperView = props => {
  return (
    <div className={c.Swiper}>
      <div className={c.prev__container}>
        <div className={c.prev}></div>
      </div>

      <Swiper
        navigation={{
          prevEl: `.${c.prev__container}`,
          nextEl: `.${c.next__container}`,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className={c.swiper}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        breakpoints={{
          767: {
            navigation: {
              prevEl: `.${c.prev__container}`,
              nextEl: `.${c.next__container}`,
            },
            pagination: false,
          },
          1280: {
            navigation: {
              prevEl: `.${c.prev__container}`,
              nextEl: `.${c.next__container}`,
            },
          },
        }}
      >
        <SwiperSlide>
          <img src={props.product.photo.main} className={c.image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.product.photo.display1} className={c.image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.product.photo.display2} className={c.image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.product.photo.display3} className={c.image} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className={c.next__container}>
        <div className={c.next}></div>
      </div>
    </div>
  );
};
