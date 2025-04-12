import { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import { useCheckOtp } from "../../services/mutations";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";


function CheckOTPForm({ mobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");
  const [time, setTime] = useState(60);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, mutate } = useCheckOtp();

  useEffect(() => {
    if (time === 0) setStep(1);

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data?.accessToken, 30);
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          navigate("/");
          setIsOpen(false);
          // queryClient.invalidateQueries({queryKey:["user-profile"]})
          //  setAccessToken( data?.data?.accessToken)
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  const changeHandler = (otp) => {
    setCode(otp);
  };

  return (
    <div className="flex flex-col w-[358px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6">
      <div
        className="py-2 cursor-pointer self-start"
        onClick={() => setStep(1)}
      >
        <HiOutlineArrowNarrowLeft size={24} />
      </div>
      <h4 className="text-xl font-bold text-center">کد تایید را وارد کنید.</h4>
      <form
        className="flex flex-col justify-end gap-10 flex-1"
        onSubmit={checkOtpHandler}
      >
        <label className="text-center mt-2">شماره موبایل {mobile}</label>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "45px",
              marginRight: "5px",
            }}
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className="text-center text-xs font-light text-gray-400">
            تا ارسال مجدد کد
          </p>
          <p className="text-center text-xs font-light text-gray-400">{time}</p>
        </div>
        <button
          className="bg-[#28A745] h-11 text-white rounded-md"
          type="submit"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
