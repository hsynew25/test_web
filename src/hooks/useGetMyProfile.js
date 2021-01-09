import { useEffect, useState } from "react";
import { userApi } from "../api";

export function useGetMyProfile(accessToken, isLogin) {
  const [myProfile, setMyProfile] = useState({});
  const getProfile = async () => {
    try {
      const { data, status } = await userApi.getMyProfile(accessToken);

      if (status === 200) {
        setMyProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLogin) {
      getProfile();
    }
  }, [isLogin]);

  return { myProfile };
}
