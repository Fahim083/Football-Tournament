import React from "react";
import logo from "../assets/react.svg"; // Assuming you have a logo image in the assets folder
import { BiFootball } from "react-icons/bi";

const Result = () => {
  return (
    <div className="bg-[rgb(39,39,39)] text-white p-8 px-12 w-full border-1 border-gray-700 ">
      <div className="flex justify-between items-center mb-4">
        <p>Round of 16 • Match 53</p>
        <p>01 : 00  •  01 JUL 2025</p>
      </div>
      <div className="flex justify-between items-center mb-5 px-20 pt-7 ">
        <div className="flex justify-between gap-8 items-center mb-4">
          <h2 className="text-3xl text-end font-medium ">Team Name xyzsss</h2>
          <img src={logo} alt="" className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-3xl font-medium">8  -  0</h2>
        </div>
           <div className="flex justify-between gap-8 items-center mb-4">
            <img src={logo} alt="" className="w-7 h-7" />
            <h2 className="text-3xl text-start font-medium ">Team Name xyzsss</h2>
          </div>
        </div>
      
      <div className="flex justify-center gap-[610px] items-center px-15">
        <div className="flex flex-col gap-1">
       <div className="flex  text-gray-300  justify-between gap-5 items-center">
          <div className="flex w-60 justify-end gap-2 items-center">
        <h6>10'</h6>
       <h4 className="text-xm ">Player name  </h4>
          </div> 
        <BiFootball/>
        </div>
        <div className="flex text-gray-300  justify-between gap-5 items-center">
          <div className="flex w-60 justify-end gap-2 items-center">
        <h6>20'</h6>
       <h4 className="text-xm ">Player name name </h4>
          </div> 
        <BiFootball/>
        </div>
        </div>
          <div className="flex flex-col gap-1">
       <div className="flex  text-gray-300  justify-between gap-5 items-center">
        <BiFootball/>
          <div className="flex w-60  justify-start gap-2 items-center">
       <h4 className="text-xm ">Player name  </h4>
        <h6>10'</h6>
          </div> 
        </div>
        <div className="flex text-gray-300  justify-between gap-5 items-center">
        <BiFootball/>
          <div className="flex w-60 justify-start gap-2 items-center">
       <h4 className="text-xm ">Player name name </h4>
        <h6>20'</h6>
          </div> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
