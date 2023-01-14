import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Bsub.css";

export default function Bsub() {
  
  return (
    <>
      <div className="Bsub-top">
        <div className="card-head ml-2">
          <div className="card-title">Bangla Subtitle</div>
        </div>
        <div className="Bsub-top-btn">
          <button className="button-prev-slide">
            <AiOutlineArrowLeft />
          </button>
          <button className="button-next-slide">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        className="Bsub"
        slidesPerView={2}
        spaceBetween={10}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView:4,
          },
        }}
        modules={[Navigation]}
      >
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub1.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub2.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub3.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub2.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub5.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub1.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub2.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub3.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub2.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Bsub-head">
          <div className="Bsub-img">
            <img src="./image/Bsub5.jpg" />
          </div>
          <div className="Bsub-title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
