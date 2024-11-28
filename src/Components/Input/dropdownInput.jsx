import React, { useRef } from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Checkbox from "./checkbox";

const DropdownInput = ({ classes, title, option = [] }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  return (
    <>
      <div
        className={`cursor-pointer relative z-20 w-full sm:w-[150px] h-[40px] flex items-center justify-center border rounded-md ${
          classes || ""
        }`}
        ref={ref}
      >
        <div 
          className="flex items-center justify-between px-2 w-full h-full select-none"   
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="text-[14px] text-[#344054] font-normal capitalize truncate">
            {selectedItems.length > 0 
              ? `${selectedItems.length} selected`
              : title}
          </h1>
          <FaAngleDown
            className={`text-[14px] text-[#344054] font-normal ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <div className="flex items-center w-full sm:w-[200px] absolute z-30 shadow-lg left-0 top-[calc(100%+5px)] bg-[#FFFFFF] justify-center flex-col px-2 rounded-lg">
            <div className="py-5 flex items-center h-[5px] w-full justify-between">
              <h1 className="text-[14px] capitalize text-[#344054]">{title}</h1>
              <button 
                className="text-blue-700 text-xs hover:text-blue-800 transition-colors"
              >
                clear
              </button>
            </div>
            <ul className="w-full max-h-[200px] overflow-y-auto py-2">
              {option?.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex capitalize text-[14px] text-[#344054] font-normal items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded"
                >
                  <Checkbox 
                    title={item} 
                    id={idx}
                    checked={selectedItems.includes(item)}
                    // onChange={() => handleCheckboxChange(item)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownInput;