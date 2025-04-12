import React from "react";
import imgTv from "../assets/images/Error.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap mb-5 justify-between items-center w-full lg:w-[1188px] mx-auto">
      <img
        src={imgTv}
        alt="error"
        className="w-[322px] h-[322px] lg:w-[555px] lg:h-[555px] mx-auto"
      />
      <div className="grow text-center ">
        <h1 className="font-medium text-2xl lg:text-4xl text-black mb-6 lg:mb-[50px]">
          {" "}
          !صفحه مورد نظر یافت نشد{" "}
        </h1>
        <Link
          className="inline-block w-[232px] lg:w-[361px] p-[8px] text-[#28A745] font-medium text-xl lg:text-[28px] bg-[#D8FFE1] rounded-2xl"
          to="/"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
