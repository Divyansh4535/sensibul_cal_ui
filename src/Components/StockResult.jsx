import React from "react";
import DropdownInput from "./Input/dropdownInput";
import Switch from "./Input/switch";
import { FaSearch } from "react-icons/fa";

const StockResult = () => {
  const sectors = [
    "automobile",
    "banking",
    "energy",
    "healthcare",
    "technology",
    "consumer",
    "financial",
    "real-estate",
    "telecom",
    "utilities",
  ];
  const EventType = [
    "Bonus",
    "Dividend",
    "Earnings",
    "IPO",
    "Merger",
    "Acquisition",
    "Restructuring",
    "Other",
  ];
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="h-[70px] border-b flex bg-[#FBFBFB] items-center px-2  ">
        <div className=" flex items-center gap-5 justify-between w-full  ">
          <div className="w-[55%] flex items-center gap-4">
            <h1 className="text-[#344054] font-medium text-[16px]">Filters</h1>
            <DropdownInput
              title="sectors"
              option={sectors}
              classes="w-[60%]"
              
            />
            <DropdownInput
              title="Event Type"
              option={EventType}
              classes="w-[80%]"
            />
            <div className=" w-full h-full flex items-center  gap-2 ">
              <div className="cursor-pointer px-1  w-[120px] h-[40px] flex items-center justify-center border  rounded-md ">
                <h1 className="text-[14px] capitalize text-[#344054]  ">
                  {" "}
                  28th Nov 2024{" "}
                </h1>
              </div>
              to
              <div className="cursor-pointer  px-1 w-[120px] h-[40px] flex items-center justify-center border  rounded-md ">
                <h1 className="text-[14px] capitalize text-[#344054]  ">
                  {" "}
                  1st Dec 2024{" "}
                </h1>
              </div>
            </div>
            <div className="flex items-center w-full h-full  gap-2">
              <Switch />
              <span className="capitalize text-[12px] text-[#344054] font-normal ">
                {" "}
                liquid only
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center  w-[25%] h-10   ">
            <div className="flex px-2 border border-slate-400 items-center justify-center w-full gap-2 bg-[#FFFF]  h-full   rounded-lg focus:border-blue-600 ">
              <FaSearch className="text-slate-400 font-extralight " />
              <input
                type="search"
                name=""
                id=""
                className="w-[95%] bg-transparent h-full outline-none border-none py-auto  text-slate-500 "
                placeholder="Search Company / underlying"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full  ">
        <table className="w-full ">
          <thead>
            <tr className="bg-[#FBFBFB] h-10 text-[12px] text-[#344054] font-medium text-left border-b">
              <th className="border-r px-1"> Date </th>
              <th className="border-r px-1  ">stock Name</th>
              <th className="border-r px-1  ">Event</th>
              <th className="border-r px-1 text-right ">Price (Chg%)</th>
              <th className="border-r px-1  ">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 ">
                {" "}
                National Aluminium Co. Ltd. (NATIONALUM)
              </td>
              <td className="border-r px-1  w-40 ">
                {" "}
                <span className=" bg-purple-200 text-purple-500  px-3 py-1 rounded-md">
                  Dividend{" "}
                </span>
              </td>
              <td className="border-r px-1 w-32 text-right "> 246.95 +0.3% </td>
              <td className="border-r px-1 w-fit">
                {" "}
                Interim Dividend of ₹4 Per Share
              </td>
            </tr>
            <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 ">
                {" "}
                National Aluminium Co. Ltd. (NATIONALUM)
              </td>
              <td className="border-r px-1  w-40 ">
                {" "}
                <span className=" bg-purple-200 text-purple-500  px-3 py-1 rounded-md">
                  Dividend{" "}
                </span>
              </td>
              <td className="border-r px-1 w-32 text-right "> 246.95 +0.3% </td>
              <td className="border-r px-1 w-fit">
                {" "}
                Interim Dividend of ₹4 Per Share
              </td>
            </tr>     <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 ">
                {" "}
                National Aluminium Co. Ltd. (NATIONALUM)
              </td>
              <td className="border-r px-1  w-40 ">
                {" "}
                <span className=" bg-purple-200 text-purple-500  px-3 py-1 rounded-md">
                  Dividend{" "}
                </span>
              </td>
              <td className="border-r px-1 w-32 text-right "> 246.95 +0.3% </td>
              <td className="border-r px-1 w-fit">
                {" "}
                Interim Dividend of ₹4 Per Share
              </td>
            </tr>     <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 ">
                {" "}
                National Aluminium Co. Ltd. (NATIONALUM)
              </td>
              <td className="border-r px-1  w-40 ">
                {" "}
                <span className=" bg-purple-200 text-purple-500  px-3 py-1 rounded-md">
                  Dividend{" "}
                </span>
              </td>
              <td className="border-r px-1 w-32 text-right "> 246.95 +0.3% </td>
              <td className="border-r px-1 w-fit">
                {" "}
                Interim Dividend of ₹4 Per Share
              </td>
            </tr>     <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29th Nov, Friday </td>
              <td className="border-r px-1 ">
                {" "}
                National Aluminium Co. Ltd. (NATIONALUM)
              </td>
              <td className="border-r px-1  w-40 ">
                {" "}
                <span className=" bg-purple-200 text-purple-500  px-3 py-1 rounded-md">
                  Dividend{" "}
                </span>
              </td>
              <td className="border-r px-1 w-32 text-right "> 246.95 +0.3% </td>
              <td className="border-r px-1 w-fit">
                {" "}
                Interim Dividend of ₹4 Per Share
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockResult;
