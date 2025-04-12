import React from "react";
import { getUserTours } from "../../services/queries";
import { PiSunHorizonThin } from "react-icons/pi";
import { selectVehcle } from "../../utils/vehicle";
import vehicleIcon from "../modules/vehcileIcon";
import {
  convertToPersianDateWithMonthName,
  getTourStatus,
} from "../../utils/date";
import { tourNumber } from "../../utils/tourNumber";
import { Loading } from "../layout/Loading";

function UserToursPage() {
  const { data, isPending } = getUserTours();

  if (isPending) return <Loading />;

  return (
    <div className="w-full lg:w-[872px] border border-[#00000033] flex flex-col gap-[20px] p-[20px] rounded-[10px]">
      {data?.data.map((item, index) => {
        const vehicleName = item.fleetVehicle;
        const IconComponent = vehicleIcon(vehicleName);

        return (
          <div
            key={index}
            className="w-full lg:w-[832px] lg:h-[168px] rounded-[10px] border border-[#00000033] border-opacity-20 p-[15px] flex flex-col justify-between"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-y-[20px] ">
              <p
                className="flex items-center w-[89px] h-[20px] text-[#28A745] p-[8px] rounded-[27px] font-normal text-xs"
                style={{ backgroundColor: "#28A7454D" }}
              >
                {getTourStatus(item?.startDate, item?.endDate)}
              </p>
              <div className="w-full lg:w-[80%] flex justify-between items-start gap-y-[20px]">
                <div className="w-[45%] lg:w-[50%] flex flex-col items-end  justify-center  gap-5">
                  <div className="flex justify-between items-center gap-x-2">
                    <p className="font-normal text-sm lg:text-sm text-[#000000]">
                      سفر با {selectVehcle(item.fleetVehicle)}
                    </p>
                    {IconComponent && <div className="">{IconComponent}</div>}
                  </div>

                  <div className="flex flex-col lg:flex-row justify-end items-center gap-x-[8px] grow">
                    <p
                      className="text-xs lg:text-sm font-normal"
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    >
                      {convertToPersianDateWithMonthName(item.endDate)} :
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-black">
                      تاریخ برگشت
                    </p>
                  </div>
                </div>
                <div className="w-[45%] lg:w-[50%]  flex flex-col items-end  justify-center gap-5">
                  <div className="flex justify-between items-center gap-x-2 ">
                    <p>{item.title}</p>
                    <PiSunHorizonThin className="w-[24px] h-[24px]" />
                  </div>
                  <div className="flex flex-col lg:flex-row justify-end items-center gap-x-[8px] ">
                    <p
                      className="text-xs lg:text-sm font-normal"
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    >
                      {convertToPersianDateWithMonthName(item.startDate)} :
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-black">
                      {item.destination["name"]} to {item.origin["name"]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[ #00000033] w-full my-[15px] border border-[#00000033]"></div>
            <div className="flex items-baseline justify-end ">
              <div className="flex  justify-end items-center gap-x-[8px] pr-[12px]">
                <div className="flex  justify-end items-center gap-x-[8px]">
                  <p
                    className="text-xs lg:text-sm font-normal"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    تومان
                  </p>
                  <p className="text-xs lg:text-sm font-semibold text-black">
                    {item.price.toLocaleString("fa-IR").replace(/،/g, ",")}
                  </p>
                </div>
                <p
                  className="text-xs lg:text-sm font-normal"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  مبلغ پرداخت شده
                </p>
              </div>

              <div className="flex  justify-end items-baseline  mb-[15px] border-l border-l-[#00000033] pl-[12px] gap-2">
                <p className="text-xs lg:text-sm font-semibold text-black">
                  {tourNumber(item.id)}
                </p>
                <p
                  className="text-xs lg:text-sm font-normal"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  شماره تور
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserToursPage;
