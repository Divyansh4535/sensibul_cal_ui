import React from "react";
import DropdownInput from "./Input/dropdownInput";

const EconomicCal = () => {
  const country = ["india", "china", "japan", "Euro", "USA", "UK"];
  const level = ["high", "low", "medium"];
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="h-[70px] border-b flex bg-[#FBFBFB] items-center px-2  ">
        <div className=" flex items-center gap-5">
          <h1 className="text-[#344054] font-medium text-[16px]">Filters</h1>
          <DropdownInput title="country" option={country} classes="w-150px" />
          <DropdownInput title="impact" option={level} classes="w-150px" />
          <div className="cursor-pointer  w-[100px] h-[40px] flex items-center justify-center border  rounded-md ">
            <h1 className="text-[14px] capitalize text-[#344054]  ">
              {" "}
              Start Date{" "}
            </h1>
          </div>
          <div className="cursor-pointer  w-[100px] h-[40px] flex items-center justify-center border  rounded-md ">
            <h1 className="text-[14px] capitalize text-[#344054]  ">
              {" "}
              End Date{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-full  ">
        <table className="w-full ">
          <thead>
            <tr className="bg-[#FBFBFB] h-10 text-[12px] text-[#344054] font-medium text-left border-b">
              <th className="border-r px-1"> Data </th>
              <th className="border-r px-1  ">Country</th>
              <th className="border-r px-1  ">Event</th>
              <th className="border-r px-1  ">Impact</th>
              <th className="border-r px-1  w-32 text-right ">Expected</th>
              <th className="border-r px-1 w-32  text-right ">Actual</th>
              <th className="w-32 text-right px-2">Previous </th>
            </tr>
          </thead>
          <tbody>
            <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29 Nov, Fri 5:30 PM</td>
              <td className="border-r px-1 "> India</td>
              <td className="border-r px-1 "> GDP Growth Rate YoY Q3</td>
              <td className="border-r px-1  "> <span className=" bg-red-300  px-3 py-1 rounded-md">High</span></td>
              <td className="border-r px-1 w-32 text-right "> 6.50%</td>
              <td className="border-r px-1 w-32 text-right"> --</td>
              <td className="w-32 text-right px-2"> 6.70%</td>
            </tr>
            <tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29 Nov, Fri 5:30 PM</td>
              <td className="border-r px-1 "> India</td>
              <td className="border-r px-1 "> GDP Growth Rate YoY Q3</td>
              <td className="border-r px-1  "> <span className=" bg-red-300  px-3 py-1 rounded-md">High</span></td>
              <td className="border-r px-1 w-32 text-right "> 6.50%</td>
              <td className="border-r px-1 w-32 text-right"> --</td>
              <td className="w-32 text-right px-2"> 6.70%</td>
            </tr><tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29 Nov, Fri 5:30 PM</td>
              <td className="border-r px-1 "> India</td>
              <td className="border-r px-1 "> GDP Growth Rate YoY Q3</td>
              <td className="border-r px-1  "> <span className=" bg-red-300  px-3 py-1 rounded-md">High</span></td>
              <td className="border-r px-1 w-32 text-right "> 6.50%</td>
              <td className="border-r px-1 w-32 text-right"> --</td>
              <td className="w-32 text-right px-2"> 6.70%</td>
            </tr><tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29 Nov, Fri 5:30 PM</td>
              <td className="border-r px-1 "> India</td>
              <td className="border-r px-1 "> GDP Growth Rate YoY Q3</td>
              <td className="border-r px-1  "> <span className=" bg-red-300  px-3 py-1 rounded-md">High</span></td>
              <td className="border-r px-1 w-32 text-right "> 6.50%</td>
              <td className="border-r px-1 w-32 text-right"> --</td>
              <td className="w-32 text-right px-2"> 6.70%</td>
            </tr><tr
              key=""
              className="text-[12px] text-[#344054] font-normal border-b h-12"
            >
              <td className="border-r px-1 "> 29 Nov, Fri 5:30 PM</td>
              <td className="border-r px-1 "> India</td>
              <td className="border-r px-1 "> GDP Growth Rate YoY Q3</td>
              <td className="border-r px-1  "> <span className=" bg-red-300  px-3 py-1 rounded-md">High</span></td>
              <td className="border-r px-1 w-32 text-right "> 6.50%</td>
              <td className="border-r px-1 w-32 text-right"> --</td>
              <td className="w-32 text-right px-2"> 6.70%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EconomicCal;
