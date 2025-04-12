import { useState } from "react";

import { isValidMobile } from "../../utils/validation";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { useSendOtp } from "../../services/mutations";

function SendOTPForm({ mobile, setMobile, setStep, setIsOpen }) {
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();
  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/");
    setIsOpen(false);
  };

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center w-[358px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6">
      <div className="py-2 cursor-pointer self-start" onClick={backHandler}>
        <HiOutlineArrowNarrowLeft size={24} />
      </div>
      <h4 className="text-xl font-bold text-center">ورود به تورینو</h4>
      <form
        className="w-full flex flex-col justify-end items-center gap-10 flex-1"
        onSubmit={sendOtpHandler}
      >
        <label>شماره موبایل خود را وارد کنید</label>
        <input
          type="text"
          placeholder="۰۹۱۲۳۳۳****"
          className="w-full h-11 rounded-md border border-[#00000037]"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!!error && <p className="text-red-500">{error}</p>}
        <button
          className="w-full bg-[#28A745] h-11 text-white rounded-md"
          type="submit"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
