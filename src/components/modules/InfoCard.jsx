import React from "react";
import pic from "../../assets/images/pic.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function InfoCard() {
  return (
    <div className="flex flex-wrap-reverse lg:flex-nowrap w-[96%] lg:w-[1188px] mx-auto border border-black/25 rounded-[10px] my-[100px] gap-2 pb-2 lg:p-0">
      <div className="flex flex-row-reverse lg:flex-col justify-center items-center gap-2 grow">
        <div className="p-[8px] font-bold text-xl lg:text-[28px] flex  items-center">
          <FaPhoneAlt className="size-[20px] lg:size-[24px] mr-2" />
          021-1840
        </div>
        <Link
          to="/more-info"
          className="flex justify-center items-center px-[8px] rounded-[8px] w-[175px] h-[41px] bg-[#10411B] text-centre text-white"
        >
          اطلاعات بیشتر
        </Link>
      </div>

      <div className=" flex relative bg-[#28A745] w-full h-[128px] lg:w-[869.14px] lg:h-[251px] rounded-t-lg lg:rounded-[10px] items-center px-[30px]">
        <img
          src={pic}
          alt="man"
          className="w-auto h-[185px] lg:w-[308px] lg:h-[225px] absolute lg:static bottom-0 left-0"
        />
        <div className="grow-1 text-right">
          <p className="font-extrabold text-xl lg:text-5xl text-white mb-[15px]">
            خرید تلفی از <span className="text-[#10411B] ">تورینو</span>
          </p>
          <p className="rext-light text-sm lg:text-[32px] text-white">
            !به هرکجا که میخواهید
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
