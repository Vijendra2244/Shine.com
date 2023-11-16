import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../InfosysPages/Home";
import WhyInfosys from "../InfosysPages/WhyInfosys";
import RestartWithInfosys from "../InfosysPages/RestartWithInfosys";
import AboutUs from "../InfosysPages/AboutUs";
import JobsInfosys from "../InfosysPages/JobsInfosys";
import VisitUs from "../InfosysPages/VisitUs";
import InfosysComponents from "../InfosysComponents";

function AllRouterInfosys() {
  return (
    <div>
      <Routes>
        <Route path="/homeInfosys" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whyinfosys" element={<WhyInfosys />} />
        <Route path="/restartwithinfosys" element={<RestartWithInfosys />} />
        <Route path="/jobsinfosys" element={<JobsInfosys />} />
        <Route path="/visitus" element={<VisitUs />} />
      </Routes>
    </div>
  );
}

export default AllRouterInfosys;
