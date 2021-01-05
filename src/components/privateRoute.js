import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { userApi } from "../api";
import { useGetToken } from "../hooks/useGetToken";
import { useLogin } from "../hooks/useLogin";
import Loader from "./loader";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { access_token } = useGetToken();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const Authenticate = async () => {
      setLoading(true);
      try {
        const { status } = await userApi.tokenValidation(access_token);

        if (status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    Authenticate();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Route
      {...rest}
      render={(props) => (
        <>
          {!isAuthenticated && (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )}
          <Component {...rest} {...props} />
        </>
      )}
    />
  );
};

export default PrivateRoute;
