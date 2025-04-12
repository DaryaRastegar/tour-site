import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdOutlineTsunami } from "react-icons/md";
import { MdOutlineRepeatOne } from "react-icons/md";
import { useGetUserProfile } from "../services/queries";
import { Loading } from "../components/layout/Loading";

function UserDetails() {
  const { data, isPending, isError } = useGetUserProfile();
  const naviagte = useNavigate();
  if (isError) {
    naviagte("/", { replace: true });
  }

  if (isPending) return <Loading />;

  return (
    <div className="w-full lg:w-[1188px] mx-auto  flex gap-8 my-[30px]">
      <div className="grow">
        <Outlet />
      </div>

      <div className="hidden lg:flex flex-col   w-[284px] h-[170px] rounded-[10px] border border-[#00000033] border-opacity-20 ">
        <NavLink
          to="/user/user-profile"
          className={({ isActive }) =>
            `font-base font-normal text-[#282828] flex justify-end  gap-x-[3px] p-[10px] w-[284px] h-[59px] ${
              isActive
                ? "text-green-600 font-bold bg-[#28A74540]"
                : "text-[#282828]   "
            }`
          }
        >
          پروفایل
          <IoPerson className="size-[20px]" />
        </NavLink>

        <div className="w-[80%] h-[1px] bg-[#00000033] bg-opacity-20 mx-auto"></div>

        <NavLink
          to="/user/user-tours"
          className={({ isActive }) =>
            `font-base font-normal text-[#282828] flex justify-end  gap-x-[3px] p-[10px] w-[284px] h-[59px]  ${
              isActive
                ? "text-green-600 font-bold bg-[#28A74540]"
                : "text-[#282828] "
            }`
          }
        >
          تور های من
          <MdOutlineTsunami className="size-[20px]" />
        </NavLink>

        <div className="w-[80%] h-[1px] bg-[#00000033] bg-opacity-20 mx-auto"></div>

        <NavLink
          to="/user/user-payment"
          className={({ isActive }) =>
            ` font-base font-normal text-[#282828] flex justify-end  gap-x-[3px] p-[10px] w-[284px] h-[59px] ${
              isActive
                ? "text-green-600 font-bold bg-[#28A74540] "
                : "text-[#282828] "
            }`
          }
        >
          تراکنش ها <MdOutlineRepeatOne className="size-[20px]" />
        </NavLink>
      </div>
    </div>
  );
}

export default UserDetails;
