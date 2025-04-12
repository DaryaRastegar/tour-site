import React from "react";
import { FaQuestion } from "react-icons/fa";

import building from "../../assets/images/building.png";
import car from "../../assets/images/car.png";
import nature from "../../assets/images/nature.png";
import airWindow from "../../assets/images/airWindow.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Pagination } from "swiper/modules";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="w-[96%] lg:w-[1182px] h-[386px] lg:h-[600px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="w-[65%] lg:w-[517px] m-auto">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={building} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nature} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={airWindow} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full lg:w-[517px] text-right">
        <div className="flex justify-end items-center gap-3">
          <h2 className="text-4xl">
            چرا <span className="text-green-700">تورینو</span> ؟
          </h2>
          <div className="rounded-full w-[59px] h-[59px] bg-red-50 flex justify-center items-center text-white bg-gradient-to-b from-green-500 to-green-900">
            <FaQuestion size={24} />
          </div>
        </div>
        <h4 className="hidden lg:block text-2xl leading-[40px] mt-5">
          تور طبیعت گردی و تاریخی  
        </h4>
        <p className="hidden lg:block leading-[44px]">
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
    </div>
  );
};

export default Slider;
