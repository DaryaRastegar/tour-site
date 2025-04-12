import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder, usePutProfile } from "../services/mutations";

import toast from "react-hot-toast";

import { IoPerson } from "react-icons/io5";
import { getDaysDifference } from "../utils/date";
import { useGetBascet, useGetUserProfile } from "../services/queries";
import UserForm from "../components/modules/UserForm";
import { useQueryClient } from "@tanstack/react-query";
 

function ReservePage() {
  const { data: data1, isLaoding, mutate, onSuccess, onError } = useOrder();
  const {
    isPending: puProfilePending,
    mutate: putProfileMutate,
    onSuccess: putProfileOnSuccess,
  } = usePutProfile();
  const { data: profile, isSuccess: getProfileSuccess } = useGetUserProfile();
  const { data: bascetData, isPending } = useGetBascet();
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    nationalCode: profile?.data?.nationalCode || "",
    fullName: profile?.data?.fullName || "",
    gender: profile?.data?.gender || "",
    birthDate: profile?.data?.birthDate || "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (getProfileSuccess) {
      setForm((prev) => ({
        nationalCode: profile?.data?.nationalCode || prev.nationalCode,
        fullName: profile?.data?.fullName || prev.fullName,
        gender: profile?.data?.gender || prev.gender,
        birthDate: profile?.data?.birthDate || prev.birthDate,
      }));
    }
  }, [profile]);

  const changeHandler = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const ClickHandler = () => {
    if (
      !form.nationalCode ||
      !form.fullName ||
      !form.gender ||
      !form.birthDate
    ) {
      toast.error("لطفا اطلاعات درست وارد کنید");
      return;
    }

    mutate(form, {
      onSuccess: () => {},
    });
    putProfileMutate(
      { ...profile?.data, ...form },
      {
        putProfileOnSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["user-profile"] });
        },
      },
    );
    navigate("/");
  };

  if (isPending) return <p>Loading...</p>;

  const { title, endDate, price, startDate } = bascetData.data;

  return (
    <div className="w-full lg:w-[1440px] mx-auto pt-[50px] pb-[50px] bg-[#f0eaea]">
      <div className="w-full lg:w-[1188px] mx-auto  bg-[#f0eaea]  flex flex-col-reverse lg:flex-row justify-between  gap-4">
        <div className="w-[96%] m-auto lg:m-0 lg:w-[307px] h-[228px] flex flex-col gap-y-6 text-centre p-[10px] rounded-[10px] bg-white">
          <div className=" flex justify-between items-center border-b border-dashed border-gray-500 pb-[20px]">
            <div className="flex justify-end items-center gap-1 *:font-normal *:text-[#282828] *:text-base *:opacity-50">
              <p>{"شب"}</p>
              <p>{getDaysDifference(startDate, endDate, true)}</p>
              <p>{"روز"}</p>
              <p>{getDaysDifference(startDate, endDate, false)}</p>
            </div>
            <h1 className=" font-semibold text-2xl text-balck">{title}</h1>
          </div>

          <div className="flex items-center justify-between ">
            <div className="w-[178px] flex  items-center gap-2">
              <p className="  text-sm font-normal   text-black leading-[21.88px] ">
                تومان
              </p>
              <p className=" text-[28px] font-medium  text-[#009ECA] leading-[43.75px]">
                {price.toLocaleString("fa-IR").replace(/،/g, ",")}
              </p>
            </div>
            <p className="font-normal text-[#282828] text-base ">قیمت نهایی</p>
          </div>

          <button
            className="w-full lg:w-[283px] h-[56px] rounded-[10px] bg-[#28A745] text-white p-[8px] flex justify-center items-center text-2xl font-normal cursor-pointer"
            onClick={ClickHandler}
          >
            رزرو و خرید
          </button>
        </div>

        <div className="w-[96%] lg:w-fit m-auto lg:m-0 grow p-[10px]  bg-white rounded-[10px]">
          <div className="flex justify-end gap-[8px] items-center mb-[10px]">
            <p className="text-2xl text-normal color-black">مشخصات مسافر </p>
            <IoPerson className=" size-[24px]" />
          </div>

          <UserForm form={form} changeHandler={changeHandler} />
        </div>
      </div>
    </div>
  );
}

export default ReservePage;
