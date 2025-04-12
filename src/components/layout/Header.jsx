import React, { useEffect, useRef, useState } from "react";
import profileImage from "../../assets/images/profile.svg";
import torinoImage from "../../assets/images/torino.png";
import { BiLogInCircle } from "react-icons/bi";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../utils/cookie";

import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

import { useGetUserProfile } from "../../services/queries";


const list = [
  { id: 1, title: "تماس با ما", path: "/contact" },
  { id: 2, title: "درباره ما", path: "/about" },
  { id: 3, title: "خدمات گردشگری", path: "/services" },
  { id: 4, title: "صفحه اصلی", path: "/" },
];

function Header({ isOpen, setIsOpen }) {
  const { data, isPending, refetch, isSuccess } = useGetUserProfile();
  const [mobile, setMobile] = useState("");

  const [openMenu, setOpenMenu] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [token, setToken] = useState("");
  const div = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("accessToken");
    token ? setToken(token) : setToken("");
    refetch();
  }, [isOpen]);

  useEffect(() => {
    if (data) {
      setMobile(data?.data?.mobile);
    } else {
      setMobile("");
    }
  }, [data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (div.current && !div.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clickHandler = () => {
    setIsOpen(true);
    navigate("/auth");
  };

  const logoutHandler = () => {
    removeCookie();
    setIsShow(false);
    setMobile("");
    setToken("");
    refetch();
    navigate("/", { replace: true });
  };

  return (
    <header className="relative w-full px-3 lg:p-0 lg:w-[1188px] mx-auto flex justify-between items-center h-[74px]  drop-shadow-[0px_1px_4px_0px_#00000029]">
      {mobile ? (
        <button
          className=" flex gap-1 justify-between items-center border-2 border-[#28A745] text-[#28A745]  rounded-lg p-[8px] w-[180px] h-[44px] font-medium text-lg transition-all duration-75 ease-in-out  hover:scale-105 cursor-pointer"
          onClick={() => setIsShow((isShow) => !isShow)}
        >
          <IoIosArrowDown className="w-[24px] h-[24px]" />
          <span className="w-[119PX] h-[22px]">{mobile}</span>
          <img src={profileImage} className="w-[24px] h-[24px]" alt="" />
        </button>
      ) : (
        <button
          className=" flex gap-1 justify-center border-2 border-[#28A745] text-[#28A745]  rounded-lg p-[8px] lg:w-[166px] font-medium text-lg transition-all duration-75 ease-in-out  hover:scale-105 cursor-pointer"
          onClick={clickHandler}
        >
          <div className="lg:flex gap-1 justify-center items-center hidden">
            ورود | ثبت نام <img src={profileImage} alt="" />
          </div>
          <div className="flex justify-center items-center lg:hidden">
            <BiLogInCircle size={24} />
          </div>
        </button>
      )}

      <div className="lg:hidden block" onClick={() => setOpenMenu(true)}>
        <RxHamburgerMenu size={24} />
      </div>
      <div
        className={`lg:flex items-center ${
          openMenu
            ? "w-full h-svh bg-black/20 fixed top-0 right-0 flex justify-end flex-col z-10"
            : "hidden"
        }`}
        onClick={() => setOpenMenu(false)}
      >
        <ul
          className="flex flex-col absolute lg:static rounded-xl lg:rounded-0 top-0 right-0 p-4 lg:p-0 lg:flex-row justify-start lg:justify-between items-end lg:items-center w-2/3 lg:w-[499px] h-dvh lg:h-[25px] bg-amber-50 lg:bg-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          {list.map((item) => (
            <li key={item.id} className="group ">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition font-base font-normal text-[#282828]  ${
                    isActive ? "text-[#28A745] font-bold " : "text-[#282828] "
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <img
          src={torinoImage}
          alt="Profile"
          className="w-[146px] h-[44px] ml-[40px] hidden lg:block"
        />
      </div>
      {isShow && (
        <div
          className=" absolute flex flex-col  bg-white justify-between top-[72px] left-[-35px] z-1 w-[246px] h-[151px] rounded-[11px] overflow-hidden"
          ref={div}
        >
          <div className="flex  w-full  items-center bg-[#F4F4F4] justify-end gap-1 border-b-[1px] border-b-[#0000001F] p-[10px]">
            <span className="text-base text-[#10411B]">{mobile}</span>
            <CgProfile className="w-[16px] h-[16px] bg-[#D9D9D9] z-10  " />
          </div>

          <div className=" bg-white w-full border-b-[1px] border-b-[#0000001F]  pointer p-[10px]">
            <Link
              to="/user"
              className="flex justify-end items-center gap-1"
              onClick={() => setIsShow(false)}
            >
              <span className="text-sm text-[#282828] rounded-[50%]">
                اطلاعات حساب کاربری
              </span>
              <BsPerson />
            </Link>
          </div>

          <div
            className="flex items-center w-full bg-white justify-end gap-1 text-[#D40000] pointer p-[10px]"
            onClick={() => logoutHandler()}
          >
            <Link
              className="flex justify-end items-center gap-1"
              // onClick={() => logoutHandler()}
            >
              <span className="text-sm">خروج از حساب کاربری</span>
              <AiOutlineLogout />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
