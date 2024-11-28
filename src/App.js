import React from "react";
import EconomicCal from "./Components/EconomicCal";
import StockResult from "./Components/StockResult";
import HolidayCal from "./Components/HolidayCal";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#F4F4F4] h-screen w-screen p-5 flex justify-center items-center">
      <div className="bg-white rounded-lg border border-[#DADBDC]  w-full   flex flex-col overflow-hidden ">
        <div className=" h-[65px]  border-b w-full bg-[#F9F9F9] flex items-center justify-between gap-2 p-2   ">
          <div className=" w-[50%]  h-[90%]">
            <div className="w-[70%] bg-[#FFFFFF]  border border-[#DADBDC] rounded-lg h-full py-1">
              <ul className="w-full h-full flex items-center  gap-5 justify-center  capitalize">
                <NavLink
                  to="/economic-calendar"
                  // className=" text-[#344054] text-[14px] font-normal p-1 cursor-pointer rounded-md  "
                  className={({ isActive }) =>
                    isActive
                  ? 'text-white bg-[#006CE6] text-[14px] font-normal p-1 px-2 rounded-md  transition-colors duration-300'
                  : 'rounded-md text-[14px] font-normal  text-[#344054]  cursor-pointer    transition-colors duration-300'
                  }
                >
                  Economic calendar
                </NavLink>
                <NavLink
                  to="/stock-results-calendar"
                  // className="text-[14px] font-normal  text-[#344054]  cursor-pointer "
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white bg-[#006CE6] text-[14px] font-normal p-1 px-2 rounded-md  transition-colors duration-300'
                  : 'rounded-md text-[14px] font-normal  text-[#344054]  cursor-pointer    transition-colors duration-300'
                  }
                >
                  Stock Result calendar
                </NavLink>
                <NavLink
                  to="/holiday-calendar"
                  // className="text-[14px] font-normal text-[#344054] cursor-pointer"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white bg-[#006CE6] text-[14px] font-normal p-1 px-2 rounded-md  transition-colors duration-300'
                  : 'rounded-md text-[14px] font-normal  text-[#344054]  cursor-pointer    transition-colors duration-300'
                  }
                >
                  holiyday calendar
                </NavLink>
              </ul>
            </div>
          </div>

          <div className=" w-[50%] h-[90%] flex items-center justify-end">
            {/* <h2>dark mode</h2> */}
          </div>
        </div>
        <div className="h-full w-full bg-[#FBFBFB] mb-5 ">
          <Routes>
            <Route path="/economic-calendar" element={<EconomicCal />} />
            <Route path="/stock-results-calendar" element={<StockResult />} />
            <Route path="/holiday-calendar" element={<HolidayCal />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
