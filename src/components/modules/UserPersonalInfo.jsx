import React, { useState, useEffect } from "react";
import { RiEdit2Line } from "react-icons/ri";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const data = [
  { span: "nationalCode", title: "کدملی" },
  { span: "fullName", title: "نام و نام خانوادگی" },
  { span: "birthDate", title: "تاریخ تولد" },
  { span: "gender", title: "جنسیت" },
];

function UserPersonalInfo({ profile, updateProfile }) {
  const [isShow, setIsShow] = useState(false);

  const [form, setForm] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "",
  });

  useEffect(() => {
    setForm({
      nationalCode: profile?.nationalCode || "",
      fullName: profile?.fullName || "",
      gender: profile?.gender || "",
      birthDate: profile?.birthDate || "",
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
    <div
      className={`w-[96%] mx-auto lg:w-[872px] rounded-[10px] border border-[#00000033] p-[10px] ${
        isShow ? "lg:h-[240px] " : "lg:h-[171px] "
      }`}
    >
      {!isShow ? (
        <div className=" flex justify-between items-center mx-[20px]">
          <button
            className=" flex justify-between items-center text-[#009ECA] gap-x-[8px] cursor-pointer"
            onClick={() => setIsShow(true)}
          >
            ویرایش اطلاعات
            <RiEdit2Line className="size-[16px] " />
          </button>
          <h4 className="font-normal text-base text-[#000000]">اطلاعات شخصی</h4>
        </div>
      ) : (
        <div className=" text-right mb-[20px]">
          <h4 className="font-normal text-base text-[#000000] ">
            اطلاعات شخصی
          </h4>
        </div>
      )}

      {!isShow ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-[20px] gap-y-[15px] mt-[15px]">
          {data.map((i, index) => (
            <div
              key={index}
              className="flex  items-center  gap-x-[15px] justify-between lg:justify-end"
            >
              <span className="font-normal text-sm text-[#282828]">
                {form[i.span]}
              </span>
              <p className=" flex items-center gap-x-[8px] font-light text-sm text-[#000000]">
                {i.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-wrap  justify-end gap-3 w-full *:h-[45px]  *:border *:text-sm *:placeholder-text-[#00000080] *:rounded-[5px] *:border-[#00000080] *:border-opacity-50">
            <div className="w-full lg:w-[255px] flex justify-end">
              <DatePicker
                value={form.birthDate}
                onChange={(birthDate) =>
                  changeHandler({
                    target: { name: "birthDate", value: birthDate.format() },
                  })
                }
                calendar={persian}
                locale={persian_fa}
                placeholder="تاریخ تولد:"
                className="outline-none block focus:outline-none text-right"
                style={{
                  direction: "rtl",
                  outline: "none",
                  border: "none ",
                }}
                inputClass=" w-full h-[45px] p-[5px] p-0 block"
              />
            </div>

            <input
              type="number"
              placeholder=" کد ملی"
              name="nationalCode"
              value={form.nationalCode}
              onChange={changeHandler}
              className={`w-full lg:w-[255px] outline-none px-2 focus:outline-none text-right `}
            />

            <input
              type="text"
              placeholder=" نام و نام خانوادگی "
              name="fullName"
              value={form.fullName}
              onChange={changeHandler}
              className={`outline-none px-2 focus:outline-none h-[45px] w-full lg:w-[255px] p-[5px] text-right `}
            />
            <select
              value={form.gender}
              name="gender"
              onChange={changeHandler}
              className="outline-none focus:outline-none text-right h-[45px] w-full lg:w-[255px] p-[5px] text-[#00000080]"
            >
              <option value="" disabled>
                جنسیت
              </option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
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

export default UserPersonalInfo;
