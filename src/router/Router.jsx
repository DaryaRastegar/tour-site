import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthForm from "../pages/AuthFrom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/404";
import { TourDetails } from "../components/templates/TourDetails";
import UserDetails from "../pages/UserDetails";
import ReservePage from "../pages/ReservePage";
import UserToursPage from "../components/templates/UserToursPage";
import UserProfile from "../components/templates/UserProfile";
import UserPaymentPage from "../components/templates/UserPaymentPage";
import { useGetUserProfile } from "../services/queries";


function Router({ isOpen, setIsOpen }) {
  const [redirect, setRedirect] = useState(true);
  const { data, isPending, isError, refetch } = useGetUserProfile();


  return (
    <Routes>
      <Route index element={<HomePage redirect={redirect} />} />
      <Route
        path="/auth"
        element={
          data?.data?.id && !isPending && !isError ? (
            <Navigate to="/" />
          ) : (
            <AuthForm isOpen={isOpen} setIsOpen={setIsOpen} />
          )
        }
      />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/user" element={<UserDetails />}>
        <Route index element={<Navigate to="user-profile" replace />} />
        <Route path="user-tours" element={<UserToursPage />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="user-payment" element={<UserPaymentPage />} />
      </Route>
      <Route
        path="/buy-ticket"
        element={
          data?.data.id && !isPending && !isError ? (
            <ReservePage />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
