import React from "react";
import heartImg from "../../assets/images/heart.svg";
import percentage from "../../assets/images/comment.svg";
import comment from "../../assets/images/percentage.svg";
import airline from "../../assets/images/airline.svg";
import barcode from "../../assets/images/barcode.svg";
import gold from "../../assets/images/gold.svg";
import ticket from "../../assets/images/ticket.svg";

import unberella from "../../assets/images/unberella.svg";
import torino from "../../assets/images/torino.png";

function Footer() {
  return (
    <footer className="m-auto px-5 lg:p-0 w-full lg:w-[1440px] border-y  border-[#00000033] flex flex-col">
      <div className="w-full lg:w-[1188px] py-10 mx-auto grid grid-cols-1 lg:grid-cols-3 justify-between gap-32">
        <div className=" flex justify-center items-center">
          <div className="text-right">
            <p className=" font-medium text-[26px] leading-[40.63px] text-[#282828]">
              رضایت کاربران
            </p>
            <span className=" font-light text-base leading-[25px] ">
              رضایت بیش از 10هزار کاربر از تور های ما.
            </span>
          </div>
          <img src={heartImg} alt="" className="size-[99.12px]" />
        </div>

        <div className=" flex justify-center items-center">
          <div className="text-right">
            <p className=" font-medium text-[26px] leading-[40.63px] text-[#282828]">
              پشتیبانی
            </p>
            <span className=" font-light text-base leading-[25px]">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.{" "}
            </span>
          </div>
          <img src={comment} alt="" className="size-[99.12px]" />
        </div>

        <div className=" flex justify-center items-center">
          <div className="text-right">
            <p className=" font-medium text-[26px] leading-[40.63px] text-[#282828]">
              بصرفه ترین قیمت
            </p>
            <span className=" font-light text-base leading-[25px]">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.{" "}
            </span>
          </div>
          <img src={percentage} alt="" className="size-[99.12px]" />
        </div>
      </div>

      <div className="w-full lg:w-[1188px] mx-auto h-[1px] bg-[#00000033]"></div>

      <div className="w-full lg:w-[1188px] py-10 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-5">
        <div className=" flex flex-row flex-wrap lg:flex-nowrap lg:flex-col justify-between lg:justify-end">
          <div className="flex flex-col">
            <img
              src={torino}
              alt=""
              className="w-[100px] h-[30px] lg:w-[144px] lg:h-[44px]"
            />
            <span className="font-normal text-[15px] leading-[23.25px] text-black inline-block mt-[20px] mb-[20px]">
              021-8574 :تلفن پشتیبانی
            </span>
          </div>
          <div className="w-[50%] lg:w-fit flex flex-wrap lg:flex-nowrap justify-between items-center gap-6 ">
            <span className="h-[38px] lg:h-[78px] w-[35px] lg:w-[78px]">
              <img src={ticket} alt="ticket" />
            </span>
            <span className="h-[38px] lg:h-[78px] w-[35px] lg:w-[78px]">
              <img src={gold} alt="gold" />
            </span>
            <span className="h-[38px] lg:h-[78px] w-[35px] lg:w-[78px]">
              <img src={barcode} alt="barcode" />
            </span>
            <span className="h-[38px] lg:h-[78px] w-[35px] lg:w-[78px]">
              <img src={unberella} alt="unberella" />
            </span>
            <span className="h-[38px] lg:h-[78px] w-[35px] lg:w-[78px]">
              <img src={airline} alt="airline" />
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between ">
          <div className="text-right lg:mr-[40px] w-[50%] lg:w-56">
            <p className="font-semibold text-2xl mb-4">خدمات مشتریان</p>
            <ul className="*:font-normal *:text-lg text-[#282828]">
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li> پرسش و پاسخ</li>
            </ul>
          </div>
          <div className="text-right w-[50%] lg:w-56">
            <p className="font-semibold text-2xl mb-4">تورینو</p>
            <ul className="*:font-normal *:text-lg text-[#282828]">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li> بیمه مسافرتی</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
