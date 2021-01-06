import { useEffect, useState } from "react";

export const useAxios = (axiosInstance, ...rest) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    axiosInstance(...rest)
      .then(({ data }) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, []);
  return state;
};
