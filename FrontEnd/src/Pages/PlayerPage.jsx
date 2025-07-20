import { IoSearchSharp } from "react-icons/io5";
import Player from "../Components/Player";


const PlayerPage = () => {
  return (
    <div>
      <div className="flex items-center gap-5 pt-4">
        <p className="text-lg w-[560px] text-gray-300">Search By Name</p>
        <p className="text-lg w-[260px] text-gray-300">Search By Batch  </p>
        <p className="text-lg text-gray-300">Search By Category  </p>
      </div>
      <div className="py-2">
        <div className="flex  items-center gap-28  mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-1/3 text-lg font-semibold  p-3 border rounded-md border-gray-300 focus:outline-none  focus:border-orange-500"
          />
          <div className="flex justify-start gap-10 w-1/2" >
          <select className="w-80  text-lg font-semibold  p-3 border rounded-md text-gray-400 border-gray-300 focus:outline-none  focus:border-orange-500">
            <option>All Semester</option>
            <option>1 year 1 sem</option>
            <option>1 year 2 sem</option>
            <option>2 year 2 sem</option>
            <option>3 year 1 sem</option>
            <option>4 year 1 sem</option>
            <option>Master 1 sem</option>
          </select>
          <select className="w-80  text-lg font-semibold  p-3 border rounded-md text-gray-400 border-gray-300 focus:outline-none  focus:border-orange-500">
            <option>All Category</option>
            <option>Category A</option>
            <option>Category B</option>
            <option>Category C</option>
            <option>Category D</option>
            
          </select>
          <div className="flex">
            
          <button className="w-full flex md:w-auto items-center gap-2 px-6 py-3 bg-[rgb(71,144,222)] text-lg font-bold text-white rounded-md cursor-pointer hover:bg-orange-600  transition-colors">
            <IoSearchSharp/> SEARCH
          </button>
          </div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-medium ">ALL  PLAYERS :</h3>
      <div>
        <Player />
      </div>
    </div>
  );
};

export default PlayerPage;
