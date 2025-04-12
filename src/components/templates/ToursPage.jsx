import React from "react";

import TourCard from "../../components/modules/TourCard";
import { useNavigate } from "react-router-dom";

function ToursPage({ data, isLoading, error }) {
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading tours.</p>;

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 w-[96%] lg:w-[1188px] mx-auto">
      {data?.map((item) => (
        <TourCard
          key={item.id}
          item={item}
          onClick={() => navigate(`/tours/${item.id}`)}
        />
      ))}
    </div>
  );
}
export default ToursPage;
