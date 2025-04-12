import React, { useEffect, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";

function UserAccountInfo({ profile, updateProfile }) {
  const [isShow, setIsShow] = useState(false);

  const [form, setForm] = useState({
    email: "",
    mobile: "",
  });

  useEffect(() => {
    setForm({
      email: profile?.email || "",
      mobile: profile?.mobile || "",
    });
  }, [profile]);

  const changeHandler = (e) => {
    setForm((frm) => ({
      ...frm,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = () => {
    updateProfile(form);
    setIsShow(false);
  };

  return (
    <div className="w-[96%] mx-auto lg:w-[872px] h-[115px] rounded-[10px] border border-[#00000033] p-[10px]">
      <div className="flex flex-col gap-y-[15px] text-right ">
        <h4 className="font-normal text-base text-[#000000] mx-[20px]">
          اطلاعات حساب کاربری
        </h4>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-3 mx-[20px]">
          {isShow ? (
            <div className="flex gap-x-[10px] grow">
              <button
                className="  text-white w-[30%] lg:w-[122px] h-[45px] rounded-[5px] bg-[#28A745] cursor-pointer"
                onClick={submitHandler}
              >
                تایید
              </button>
              <input
                type="text"
                placeholder=" ایمیل "
                name="email"
                onChange={changeHandler}
                className={`outline-none p-[8px] focus:outline-none  text-right w-[70%] lg:w-[225px] h-[45px]  border text-sm placeholder-text-[#00000080] rounded-[5px] border-[#00000080]`}
              />
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <button
                className=" flex justify-between items-center text-[#009ECA] gap-x-[8px] cursor-pointer"
                onClick={() => setIsShow(true)}
              >
                افزودن <RiEdit2Line className="size-[16px] " />
              </button>
              <div className="flex  items-center  gap-x-[15px] ">
                <span className="font-normal text-sm text-[#282828]">
                  {form.email || "-"}
                </span>
                <p className="font-light text-sm text-[#000000]"> :ایمیل </p>
              </div>
            </div>
          )}

          <p className=" flex justify-between items-center gap-x-[8px] font-light text-sm text-[#000000]">
            <span className="font-normal text-sm text-[#282828]">
              {form.mobile}:
            </span>
            شماره موبایل
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserAccountInfo;
