import React from "react";
import { useGetUserProfile } from "../../services/queries";
import UserAccountInfo from "../modules/UserAccountInfo";
import UserPersonalInfo from "../modules/UserPersonalInfo";
import UserBankInfo from "../modules/UserBankInfo";
import { usePutProfile } from "../../services/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { Loading } from "../layout/Loading";

function UserProfile() {
  const {
    data: profile,
    isSuccess: getProfileSuccess,
    isPending,
  } = useGetUserProfile();
  const {
    isPending: puProfilePending,
    mutate: putProfileMutate,
    onSuccess: putProfileOnSuccess,
  } = usePutProfile();
  const queryClient = useQueryClient();

  const updateProfile = (newData) => {
    putProfileMutate(
      { ...profile?.data, ...newData },
      {
        putProfileOnSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["user-profile"] });
        },
      },
    );
  };

  if (isPending) return <Loading />;

  return (
    <div className="flex flex-col gap-y-[25px]">
      <UserAccountInfo profile={profile?.data} updateProfile={updateProfile} />
      <UserPersonalInfo profile={profile?.data} updateProfile={updateProfile} />
      <UserBankInfo profile={profile?.data} updateProfile={updateProfile} />
    </div>
  );
}

export default UserProfile;
