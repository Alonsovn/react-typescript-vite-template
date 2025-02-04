import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutesProps } from "./type";

const AppRoutes: React.FC<AppRoutesProps> = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export { AppRoutes };
