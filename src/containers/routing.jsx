import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Detail from "./detailPage";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Routing;
