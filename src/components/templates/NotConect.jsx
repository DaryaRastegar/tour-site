import React from "react";
import error from "../../assets/images/connect.png";
const NotConect = () => {
  return (
    <div className="flex justify-between items-center w-[1188px] mx-auto">
      <img src={error} alt="error" className=" w-[555px] h-[555px]" />
      <div className="grow text-right ">
        <h1 className="font-medium text-4xl text-black mb-[50px]">
          {" "}
          اتصال با سررور برقرار نیست{" "}
        </h1>
        <p className="font-medium text-2xl text-black ">
          لطفا دوباره امتحان کنید
        </p>
      </div>
    </div>
  );
};

export default NotConect;
