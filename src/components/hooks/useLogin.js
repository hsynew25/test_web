import { useEffect, useState } from "react";
import { userApi } from "../../api";

export function useLogin(accessToken) {
  const [isLogin, setIsLogin] = useState(false);

  const loginValidation = async (accessToken) => {
    try {
      const { status } = await userApi.tokenValidation(accessToken);
      if (status === 200) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loginValidation(accessToken);
  }, []);

  return { isLogin };
}
