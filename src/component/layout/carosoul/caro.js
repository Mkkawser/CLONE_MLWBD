import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/lazy";
import React from "react";
import "./caro.css";
export default function Caro() {
  return (
    <>
      <Swiper
        className="carosoul"
        spaceBetween={10}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="caro-img">
          <img src="./image/caro1.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
        <SwiperSlide className="caro-img">
          <img src="./image/caro2.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
        <SwiperSlide className="caro-img">
          <img src="./image/caro3.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
        <SwiperSlide className="caro-img">
          <img src="./image/caro4.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
        <SwiperSlide className="caro-img">
          <img src="./image/caro5.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
        <SwiperSlide className="caro-img">
          <img src="./image/caro1.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
        <SwiperSlide className="caro-img">
          <img src="./image/caro1.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
        <SwiperSlide className="caro-img">
          <img src="./image/caro1.jpg" alt="caro" />
          <p className="caro-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            assumenda.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
