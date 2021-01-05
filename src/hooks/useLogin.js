import { useEffect, useState } from "react";
import { userApi } from "../api";

export function useLogin(accessToken) {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const loginValidation = async (accessToken) => {
    setLoading(true);
    try {
      const { status } = await userApi.tokenValidation(accessToken);
      if (status === 200) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log(error);
      setIsLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      loginValidation(accessToken);
    }
    return setLoading(false);
  }, []);

  return { isLogin, loading };
}
