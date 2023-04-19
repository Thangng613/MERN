import { Navigate } from "react-router-dom";

import React from "react";

const Landing = () => {
  return <Navigate to={"/login"}>Landing</Navigate>;
};

export default Landing;
