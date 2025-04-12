import React, { useState, useEffect } from "react";
import { RiEdit2Line } from "react-icons/ri";


function UserBankInfo({ profile, updateProfile }) {
  const [isShow, setIsShow] = useState(false);

  const [payment, setPayment] = useState({
    shaba_code: "",
    debitCard_code: "",
    accountIdentifier: "",
  });
  useEffect(() => {
    setPayment({
      shaba_code: profile?.payment?.shaba_code || "",
      debitCard_code: profile?.payment?.debitCard_code || "",
      accountIdentifier: profile?.payment?.accountIdentifier || "",
    });
  }, [profile]);

  const changeHandler = (e) => {
    setPayment((pay) => ({
      ...pay,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = () => {
    updateProfile({ payment });
    setIsShow(false);
  };

  return (
    <div
      className={`w-[96%] mx-auto lg:w-[872px] rounded-[10px] border border-[#00000033] p-[10px] ${
        isShow ? "lg:h-[179px] " : "lg:h-[171px] "
      }`}
    >
      {!isShow ? (
        <div className=" flex justify-between  items-center mx-[20px]">
          <button
            className=" flex justify-between items-center text-[#009ECA] gap-x-[8px] cursor-pointer"
            onClick={() => setIsShow(true)}
          >
            اطلاعات
            <RiEdit2Line className="size-[16px] " />
          </button>
          <h4 className="font-normal text-base text-[#000000]">
            اطلاعات حساب بانکی
          </h4>
        </div>
      ) : (
        <div className=" text-right mb-[20px]">
          <h4 className="font-normal text-base text-[#000000] ">
            اطلاعات حساب بانکی{" "}
          </h4>
        </div>
      )}

      {!isShow ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-[20px] gap-y-[15px] mt-[15px]">
          <div className="flex items-center  gap-x-[15px] justify-between lg:justify-end">
            <span className="font-normal text-sm text-[#282828]">
              {payment?.debitCard_code || "-"}
            </span>
            <p className=" flex items-center gap-x-[8px] font-light text-sm text-[#000000]">
              شماره کارت
            </p>
          </div>

          <div className="flex  items-center  gap-x-[15px] justify-between lg:justify-end">
            <span className="font-normal text-sm text-[#282828]">
              {payment?.shaba_code || "-"}
            </span>
            <p className=" flex items-center gap-x-[8px] font-light text-sm text-[#000000]">
              شماره شبا
            </p>
          </div>

          <div className="flex lg:col-span-2 items-center  gap-x-[15px] justify-between lg:justify-end">
            <span className="font-normal text-sm text-[#282828]">
              {payment?.accountIdentifier || "-"}
            </span>
            <p className=" flex items-center gap-x-[8px] font-light text-sm text-[#000000]">
              شماره حساب
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap  justify-between gap-[5px] w-full lg::w-[255px] *:h-[45px]  *:border *:text-sm *:placeholder-text-[#00000080] *:rounded-[5px] *:border-[#00000080] *:border-opacity-50">
            <input
              type="number"
              placeholder="شماره شبا "
              name="shaba_code"
              value={payment.shaba_code}
              onChange={changeHandler}
              className={`w-full lg:w-[32%] outline-none px-2 focus:outline-none text-right `}
            />

            <input
              type="text"
              placeholder=" شماره حساب "
              name="accountIdentifier"
              value={payment.accountIdentifier}
              onChange={changeHandler}
              className={`outline-none px-2 focus:outline-none h-[45px] w-full lg:w-[32%] p-[5px] text-right `}
            />

            <input
              type="number"
              placeholder=" شماره کارت "
              name="debitCard_code"
              value={payment.debitCard_code}
              onChange={changeHandler}
              className={`outline-none px-2 focus:outline-none h-[45px] w-full lg:w-[32%] p-[5px] text-right `}
            />
          </div>
          <div className="bg-[ #00000033] w-full my-[15px] border border-[#00000033]"></div>
          <div className="flex justify-between lg:justify-end gap-x-[6px] *:h-[41px] w-full lg:w-[144px]  *:font-semibold *:text-base *:rounded-[5px]">
            <button
              className="w-[48%] bg-[#fff] text-[#28A745] border-2 border-[#28A745] cursor-pointer"
              onClick={() => setIsShow(false)}
            >
              انصراف
            </button>
            <button
              className="w-[48%] bg-[#28A745] text-white cursor-pointer"
              onClick={submitHandler}
            >
              تایید
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserBankInfo;
