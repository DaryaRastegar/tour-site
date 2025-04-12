import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTourDetails } from "../../services/queries";
import { getDaysDifference } from "../../utils/date";

import { TbUser } from "react-icons/tb";
import { CgDisplayFullwidth } from "react-icons/cg";
import { LuRoute } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { CiMedal } from "react-icons/ci";
import { FaBusSimple } from "react-icons/fa6";
import { selectVehcle } from "../../utils/vehicle";
import { e2p } from "../../utils/replaceNumber";
import { usePutBascet } from "../../services/mutations";

export const TourDetails = () => {
  const { id } = useParams();
  const { data: data1, isPending, mutate, onSuccess, onError } = usePutBascet();
  const { data, isLoading } = useGetTourDetails(id);
  const navigate = useNavigate();

  const reservHandler = () => {
    mutate(id, {
      onSuccess: () => {
        navigate(`/buy-ticket`);
      },
    });
  };

  if (isLoading) return <p>..isloading</p>;
  const {
    image,
    title,
    availableSeats,
    endDate,
    fleetVehicle,
    insurance,
    options,
    origin,
    price,
    startDate,
  } = data.data;

  return (
    <div className="w-full lg:w-[1440px] mx-auto pt-[50px] pb-[50px] bg-[#f0eaea]">
      <div className="w-full lg:w-[1188px] mx-auto  p-[20px] bg-white border border-[#00000033] border-solid rounded-[10px]  flex flex-col justify-between  gap-12 ">
        <div className=" flex flex-col-reverse lg:flex-row gap-4">
          <div className=" grow text-right flex flex-col justify-between p-0 lg:p-[12px] gap-4">
            <div className="flex flex-row-reverse lg:flex-col justify-between items-center ">
              <h1 className=" font-bold text-2xl lg:text-[32px] text-balck">
                {title}
              </h1>
              <div className="flex justify-end items-center gap-1">
                <p className="font-normal text-sm lg:text-xl text-black lg:mt-[12px]">
                  {"شب"}
                </p>
                <p className="font-normal text-sm lg:text-xl text-black lg:mt-[12px]">
                  {getDaysDifference(startDate, endDate, true)}
                </p>
                <p className="font-normal text-sm lg:text-xl text-black lg:mt-[12px]">
                  {"روز"}
                </p>
                <p className="font-normal text-sm lg:text-xl text-black lg:mt-[12px]">
                  {getDaysDifference(startDate, endDate, false)}
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-4 lg:gap-8">
              <div className="flex justify-end items-center">
                <span className="font-normal  text-[#7D7D7D] text-sm lg:text-xl">
                  تورلیدر از مبدا
                </span>
                <TbUser className="text-sm lg:text-xl  text-[#7D7D7D]  ml-[8px]" />
              </div>
              <div className="flex items-center">
                <span className="font-normal  text-[#7D7D7D] text-sm lg:text-xl">
                  برنامه سفر
                </span>
                <CgDisplayFullwidth className="text-sm lg:text-xl  text-[#7D7D7D] ml-[8px]" />
              </div>
              <div className="flex items-center">
                <span className="font-normal  text-[#7D7D7D] text-sm lg:text-xl">
                  تضمین کیفیت
                </span>
                <CiMedal className="text-sm lg:text-xl text-[#7D7D7D]  ml-[8px]" />
              </div>
            </div>
            <div className="w-full flex flex-row-reverse lg:flex-row items-center justify-between">
              <button
                className="w-[154px] h-[42px] lg:w-[204px] lg:h-[56px] rounded-[10px] bg-[#28A745] text-white p-[8px] flex justify-center items-center text-2xl font-normal cursor-pointer"
                onClick={reservHandler}
              >
                رزرو و خرید
              </button>
              <div className="lg:w-[178px] flex justify-end items-center gap-2">
                <p className="text-[18px] lg:text-[28px] font-normal lg:font-medium  text-black  leadin-[43.75px]">
                  تومان
                </p>
                <p className="text-[24px] lg:text-[28px] font-medium  text-[#009ECA] leadin-[43.75px]">
                  {price.toLocaleString("fa-IR").replace(/،/g, ",")}
                </p>
              </div>
            </div>
          </div>
          <img
            src={image}
            alt="IMAGE"
            className=" w-[397px] h-[265px] rounded-xl"
          />
        </div>

        <div className=" grid grid-cols-3 lg:grid-cols-6 text-center">
          <div className=" lg:border-r">
            <div className=" flex items-center justify-center gap-2 text-[#444444] font-normal text-[18px]">
              <span>بیمه</span>
              <AiTwotoneSecurityScan />
            </div>
            <p className=" text-base font-medium text-black mt-[8px]">
              {insurance ? "دارد" : "ندارد"}
            </p>
          </div>
          <div className=" lg:border-r">
            <div className=" flex items-center justify-center gap-2 text-[#444444] font-normal text-[18px]">
              <span>ظرفیت </span>
              <TbUsers />
            </div>
            <p className=" text-base font-medium text-black mt-[8px]">
              {e2p(availableSeats)} حداکثر
            </p>
          </div>
          <div className=" lg:border-r">
            <div className=" flex items-center justify-center gap-2 text-[#444444] font-normal text-[18px]">
              <span>حمل و نقل </span>
              <FaBusSimple />
            </div>
            <p className=" text-base font-medium text-black mt-[8px]">
              {selectVehcle(fleetVehicle)}
            </p>
          </div>
          <div className="hidden lg:block lg:border-r">
            <div className=" flex items-center justify-center gap-2 text-[#444444] font-normal text-[18px]">
              <span>تاریخ برگشت</span>
              <LuCalendarDays />
            </div>

            <p className=" text-base font-medium text-black mt-[8px]">
              {new Date(endDate).toLocaleDateString("fa-IR")}
            </p>
          </div>
          <div className="hidden lg:block lg:border-r">
            <div className=" flex items-center justify-center gap-2 text-[#444444] font-normal text-[18px]">
              <span>تاریخ رفت</span>
              <LuCalendarDays />
            </div>
            <p className=" text-base font-medium text-black mt-[8px]">
              {new Date(startDate).toLocaleDateString("fa-IR")}
            </p>
          </div>
          <div className="hidden lg:flex">
            <div className="hidden lg:flex items-center justify-center gap-2 text-[#444444]font-normal text-[18px]">
              <span>مبدا</span>
              <LuRoute />
            </div>
            <p className="hidden lg:block text-base font-medium text-black mt-[8px]">
              {origin.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
