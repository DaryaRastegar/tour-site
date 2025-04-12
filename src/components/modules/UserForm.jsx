import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function UserForm({ form, changeHandler }) {
  return (
    <div className="flex flex-wrap  justify-end gap-5 lg:gap-[5px] w-full *:h-[50px]  *:border *:text-sm *:placeholder-text-[#00000080] *:rounded-[5px] *:border-[#00000080]">
      <div className="w-full lg:w-[265px] flex justify-end">
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
          className="w-full outline-none block  focus:outline-none text-left lg:text-right"
          style={{
            direction: "rtl",
            outline: "none",
            border: "none ",
            width: "100%",
          }}
          inputClass="text-right w-full block h-[50px] p-[5px] p-0"
        />
      </div>

      <input
        type="number"
        placeholder=" کد ملی"
        name="nationalCode"
        value={form.nationalCode}
        onChange={changeHandler}
        className={`outline-none px-2 focus:outline-none h-[45px] w-full lg:w-[265px] p-[5px] text-right `}
      />

      <input
        type="text"
        placeholder=" نام و نام خانوادگی "
        name="fullName"
        value={form.fullName}
        onChange={changeHandler}
        className={`outline-none px-2 focus:outline-none h-[45px] w-full lg:w-[265px] p-[5px] text-right `}
      />
      <select
        value={form.gender}
        name="gender"
        onChange={changeHandler}
        className="w-full lg:w-[265px] outline-none focus:outline-none text-right text-[#00000080]"
      >
        <option value="" disabled>
          جنسیت
        </option>
        <option value="male">مرد</option>
        <option value="female">زن</option>
      </select>
    </div>
  );
}

export default UserForm;
