import { useQuery } from "@tanstack/react-query";

import api from "../config/api";


const useGetAllTours = (params = {}) => {
  return useQuery({
    queryKey: ["all-tours", params],
    queryFn: () => api.get("tour", { params }).then((res) => res),
  });
};

const useGetTourDetails = (id) => {
  const queryKey = ["all-tours,id"];
  const queryFn = () => api.get(`tour/${id}`);
  return useQuery({ queryKey, queryFn });
};

const getUserTours = () => {
  const queryKey = ["user-tours"];
  const queryFn = () => api.get("user/tours");
  return useQuery({ queryKey, queryFn });
};
const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: () => api.get("user/profile"),
  });
};
const useGetUserPeyment = () => {
  return useQuery({
    queryKey: ["user-transactions"],
    queryFn: () => api.get("user/transactions"),
  });
};

const useGetBascet = () => {
  return useQuery({
    queryKey: ["user-bascet"],
    queryFn: () => api.get("basket"),
  });
};

export {
  useGetAllTours,
  useGetTourDetails,
  useGetUserProfile,
  getUserTours,
  useGetBascet,
  useGetUserPeyment,
};
