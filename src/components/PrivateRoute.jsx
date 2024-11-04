import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../contexts/SessionProvider";

import React from "react";

export const PrivateRoute = () => {
  const { user } = useSession();

  if (user === undefined) {
    return <h1>Loading...</h1>;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};
