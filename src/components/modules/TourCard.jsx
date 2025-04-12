import { useNavigate } from "react-router-dom";
import { convertToJalaliMonth, getDaysDifference } from "../../utils/date";
import { selectVehcle } from "../../utils/vehicle";
import { usePutBascet } from "../../services/mutations";

const TourCard = ({ item, onClick }) => {
  const { id, image, title, fleetVehicle, startDate, endDate, options, price } =
    item;
  const { data: data1, isPending, mutate, onSuccess, onError } = usePutBascet();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.stopPropagation();
    mutate(id, {
      onSuccess: () => {
        navigate(`/buy-ticket`);
      },
    });
  };

  return (
    <div
      className="w-full lg:w-[278.44] h-[277px] drop-shadow-lg border border-black/10 flex flex-col justify-between items-centre overflow-hidden bg-center bg-cover rounded-lg "
      onClick={onClick}
    >
      <img
        src={image}
        alt="tour"
        className="w-full lg:w-[278.44px] h-[159px] bg-contain index-1"
      />

      <div className="text-right px-4">
        <p className="font-light text-[22px]  text-black">{title}</p>
        <span className="  text-[16px] text-[#282828B2] font-light ">
          ....,{convertToJalaliMonth(startDate)},
          {getDaysDifference(endDate, startDate)} روزه ,{options[1]},
          {selectVehcle(fleetVehicle)}
        </span>
      </div>

      <div className="flex justify-between items-center w-ful lg:w-[278.44px] px-4 mb-4">
        <div className="flex justify-between items-center gap-2">
          <p className=" text-base font-light leading-[25px]  text-black">
            تومان
          </p>
          <p className=" text-base font-light leading-[25px] text-[#009ECA]">
            {price.toLocaleString("fa-IR").replace(/،/g, ",")}
          </p>
        </div>
        <button
          className="w-[64px] h-[25px] rounded-sm bg-[#28A745] text-white p-[12px] flex justify-center items-center cursor-pointer"
          onClick={clickHandler}
        >
          رزرو
        </button>
      </div>
    </div>
  );
};

export default TourCard;
