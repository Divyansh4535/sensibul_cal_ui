import React from "react";
import DropdownInput from "./Input/dropdownInput";
import Switch from "./Input/switch";
import { FaSearch } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";

const HolidayCal = () => {
  return (
    <div className="w-full h-full flex flex-col  bg-[#F9F9F9]">
      <div className="w-full flex-col h-full flex items-center justify-center  ">
        <div className="h-[70px] flex bg-[#FBFBFB] items-center px-2 w-[50%] justify-center  ">
          <div className=" flex items-center gap-5 justify-between w-full ">
            <div className=" flex items-center justify-between w-full">
            <div className=" flex items-center gap-2">
              <span className="bg-blue-600 p-1 rounded-full"></span>
              <h1 className="text-[12px] font-normal text-[#344054] ">
                Upcoming Holiday: 25 December, Wednesday (27 days) — Christmas
              </h1>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Switch />
                <span className="capitalize  text-[12px] gap-2  text-[#344054] font-medium flex items-center ">
                  {" "}
                  <h1>Show US Market Holidays </h1>
                  <BsExclamationCircle className="text-[#344054] " />
                </span>
              </div>
            </div>
          </div>
        </div>

        <table className="w-[50%]  border   rounded-lg ">
          <thead>
            <tr className="bg-[#FBFBFB] h-10 text-[12px] text-[#344054] font-medium text-left border-b ">
              <th className="border-r px-1"> Sr. No. </th>
              <th className="border-r px-1  ">Date</th>
              <th className="border-r px-1  ">Weekday</th>
              <th className="border-r px-1  ">Holiday</th>
            </tr>
          </thead>
          <tbody>
            <tr
              key=""
              className="text-[12px] text-[#344054] bg-[#FFFFFF] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 1 </td>
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 "> Monday</td>
              <td className="border-r px-1  ">Special Holiday </td>
            </tr>
            <tr
              key=""
              className="text-[12px] text-[#344054] font-normal bg-[#FFFFFF] border-b h-12"
            >
              <td className="border-r px-1 "> 1 </td>
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 "> Monday</td>
              <td className="border-r px-1  ">Special Holiday </td>
            </tr>
            <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b  bg-[#FFFFFF] h-12"
            >
              <td className="border-r px-1 "> 1 </td>
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 "> Monday</td>
              <td className="border-r px-1 ">Special Holiday </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HolidayCal;
