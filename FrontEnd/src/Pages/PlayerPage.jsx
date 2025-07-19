

const PlayerPage = () => {
  return (
    <div>
      <div className=" py-5">
        <div className="flex gap-4 items-center justify-between  mb-6 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-lg font-semibold  p-3 border rounded-md border-gray-300 focus:outline-none  focus:border-orange-500"
          />
          <div className="flex justify-end gap-4" >
          <select className="w-1/3  text-lg font-semibold  p-3 border rounded-md text-gray-400 border-gray-300 focus:outline-none  focus:border-orange-500">
            <option>All Dates</option>
            <option>July 2025</option>
            <option>August 2025</option>
          </select>
          <div>
          <button className="w-full md:w-auto inline px-6 py-3 bg-[rgb(71,144,222)] text-lg font-bold text-white rounded-md cursor-pointer hover:bg-orange-600  transition-colors">
            SEARCH
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
