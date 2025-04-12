import { useEffect, useState } from "react";
import AuthForm from "./AuthFrom";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import banner from "../assets/images/banner.png";
import InfoCard from "../components/modules/InfoCard";
import Slider from "../components/modules/Slider";
import SearchBox from "../components/modules/SearchBox";
import ToursPage from "../components/templates/ToursPage";
import { useGetUserProfile } from "../services/queries";
import { useGetAllTours } from "../services/queries";

function HomePage({ redirect }) {
  const [filters, setFilters] = useState({});
  const { data: data1, isLoading: isLoading1, isError } = useGetUserProfile();

  const { data, error, isLoading, isSuccess, refetch } =
    useGetAllTours(filters);

  useEffect(() => {
    toast.dismiss();
    if (redirect && !data1 && !isLoading1 && isError) {
      toast.success("لطفا وارد اکانت خود شوید", { removeDelay: 1000 });
    }
  }, [data1]);

  return (
    <div className="w-full lg:w-[1440px] mx-auto">
      <div>
        <img
          src={banner}
          alt="airplane"
          className="w-full lg:w-[1449px] lg:h-[350px] drop-shadow-lg"
        />
      </div>
      <p className="text-center mb-[40px] mt-[40px] font-semibold text-base lg:text-[28px] ">
        <span className=" text-[#28A745] leading-[43.4px]">تورینو</span> تورینو
        برگزار کننده بهترین تور های داخلی و خارجی
      </p>
      <SearchBox
        filters={filters}
        setFilters={setFilters}
        data={data?.data}
        refetch={refetch}
      />
      <ToursPage data={data?.data} isLoading={isLoading} error={error} />
      <InfoCard />
      <Slider />
      <AuthForm />
    </div>
  );
}

export default HomePage;
