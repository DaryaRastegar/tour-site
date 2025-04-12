import { useMutation } from "@tanstack/react-query";

import api from "../config/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);

  return useMutation({ mutationFn });
};

const useOrder = () => {
  const mutationFn = (data) => api.post("order", data);

  return useMutation({ mutationFn });
};

const usePutBascet = () => {
  const mutationFn = (id) => api.put(`basket/${id}`);

  return useMutation({ mutationFn });
};

const usePutProfile = () => {
  const mutationFn = (data) => api.put(`user/profile`, data);

  return useMutation({ mutationFn });
};

export { useSendOtp, useCheckOtp, useOrder, usePutBascet, usePutProfile };
