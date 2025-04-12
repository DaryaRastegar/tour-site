import { IoLocationOutline } from "react-icons/io5";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import SearchableDropdown from "./SearchableDropdown";

import { getDestination, getsources } from "../../utils/search";

function SearchBox({ filters, setFilters, data, refetch }) {
  const [destination, setDestination] = useState({});
  const [origin, setOrigin] = useState({});
  const [startDate, setStartDate] = useState({});
  const [errors, setErrors] = useState({});

  const searchHandler = () => {
    let newQuery = {};

    if (origin?.id) newQuery.originId = origin.id;
    if (destination?.id) newQuery.destinationId = destination.id;
    if (startDate) newQuery.startDate = startDate;

    setFilters(newQuery);
    refetch();
  };

  const dateChangeHandler = (date) => {
    if (date) {
      const utcString = new Date(date.toDate()).toISOString(); // Convert to UTC
      setStartDate(utcString);
    } else {
      setStartDate("");
    }
  };

  return (
    <div className="  relative datepicker w-[96%] lg:w-[874px] lg:h-[71px] rounded-[20px] py-[15px] px-[12px] bg-white border border-[#00000026] flex flex-wrap-reverse lg:flex-row justify-between items-center mx-auto my-[45px] gap-3">
      <button
        onClick={searchHandler}
        className="w-full lg:w-[190px] h-[51px] rounded-2xl text-white bg-[#28A745] font-medium text-2xl cursor-pointer"
      >
        جستجو
      </button>

      <div className="w-full lg:w-fit flex justify-end">
        <DatePicker
          value={startDate}
          onChange={dateChangeHandler}
          calendar={persian}
          locale={persian_fa}
          placeholder=" تاریخ :"
          className="w-full lg:w-fit outline-none focus:outline-none lg:border-0 text-right "
          style={{
            direction: "rtl",
            outline: "none",
            border: "none ",
          }}
          inputClass="w-full lg:w-fit placeholder:text-[#2C2C2C]"
          format="YYYY/MM/DD"
          onOpenPickNewDate={() => {
            setStartDate("");
          }}
        />
      </div>

      <div className="w-[40%] lg:w-fit flex justify-center items-center ">
        <SearchableDropdown
          options={getDestination(data)}
          label="name"
          selectedVal={destination?.name || ""}
          placeholder="مقصد"
          handleChange={(val) => setDestination(val)}
          error={errors.destination}
        />
        <IoLocationOutline className="pl-[8px] text-4xl lg:text-[19px]" />
      </div>

      <div className="w-[40%] lg:w-fit flex justify-center items-center ">
        <SearchableDropdown
          options={getsources(data)}
          label="name"
          selectedVal={origin?.name || ""}
          placeholder="مبدا"
          handleChange={(val) => setOrigin(val)}
          error={errors.source}
        />
        <IoLocationOutline className="pl-[8px] text-4xl lg:text-[19px]" />
      </div>
    </div>
  );
}

export default SearchBox;
