import React from "react";
// const Player = ({ player }) => {
//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
//       {/* Player Image */}
//       <div className="flex-shrink-0">
//         <img
//           src="https://via.placeholder.com/100" // replace with player.image if available
//           alt={player?.name || "Player"}
//           className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-2 border-blue-500"
//         />
//       </div>

//       {/* Player Info Section */}
//       <div className="flex-1 w-full">
//         {/* Basic Info */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
//           <div>
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//               {player?.name || "Fahim Haowlader Jahid"}
//             </h2>
//             <p className="text-gray-500 text-sm sm:text-base">
//               Team: {player?.team || "Bangladesh National Team"}
//             </p>
//           </div>

//           <div className="text-right sm:text-left mt-2 sm:mt-0">
//             <p className="text-gray-500 text-xs uppercase">Player ID</p>
//             <p className="font-semibold text-gray-800">
//               {player?.id || "12345"}
//             </p>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center bg-gray-50 rounded-lg p-3 mb-3">
//           <div>
//             <p className="text-xs uppercase text-gray-500">Session</p>
//             <h2 className="font-semibold text-gray-800">
//               {player?.session || "2023-24"}
//             </h2>
//           </div>
//           <div>
//             <p className="text-xs uppercase text-gray-500">Base Price</p>
//             <h2 className="font-semibold text-gray-800">
//               {player?.basePrice || "110"}
//             </h2>
//           </div>
//           <div>
//             <p className="text-xs uppercase text-gray-500">Category</p>
//             <h2 className="font-semibold text-gray-800">
//               {player?.category || "A"}
//             </h2>
//           </div>
//           <div>
//             <p className="text-xs uppercase text-gray-500">Position</p>
//             <h2 className="font-semibold text-gray-800">
//               {player?.position || "A"}
//             </h2>
//           </div>
//         </div>

//         {/* Performance Section */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
//           <div className="bg-blue-50 rounded-lg py-2">
//             <p className="text-xs uppercase text-gray-500">Goals</p>
//             <h2 className="font-semibold text-blue-600">
//               {player?.goals || "24"}
//             </h2>
//           </div>
//           <div className="bg-blue-50 rounded-lg py-2">
//             <p className="text-xs uppercase text-gray-500">Assists</p>
//             <h2 className="font-semibold text-blue-600">
//               {player?.assists || "110"}
//             </h2>
//           </div>
//           <div className="bg-blue-50 rounded-lg py-2">
//             <p className="text-xs uppercase text-gray-500">Matches</p>
//             <h2 className="font-semibold text-blue-600">
//               {player?.matches || "A"}
//             </h2>
//           </div>
//           <div className="bg-blue-50 rounded-lg py-2">
//             <p className="text-xs uppercase text-gray-500">Cards</p>
//             <div className="flex items-center justify-center gap-3">
//               <h2 className="font-semibold text-blue-600">
//                 {player?.redcard || "0"}
//               </h2>
//               <h2 className="font-semibold text-blue-600">
//                 {player?.yellowcard || "0"}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Player;

const Player = ({ player }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-1 sm:p-3 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Player Image
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/100" // Replace with player.image
          alt={player?.name || "Player"}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-2 border-blue-500"
        />
      </div> */}

      {/* Player Info Section */}
      <div className="flex-1 w-full text-gray-100">
        {/* Basic Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          {/* Player Image */}
          <div className="flex-shrink-0 flex justify-center items-center pt-2 sm:pt-0">
            <img
              src="https://via.placeholder.com/100" // Replace with player.image
              alt={player?.name || "Player"}
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-full border-2 border-blue-500"
            />
          </div>
          <div className="flex px-2 items-center justify-between w-full">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                {player?.name || "Fahim Haowlader Jahid"}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                {player?.team || "--"}
              </p>
            </div>

            <div className="text-right sm:text-left mt-3 sm:mt-0">
              <p className="text-gray-500 text-xs uppercase">Player ID</p>
              <p className="font-semibold text-blue-400 text-right">
                {player?.id || "12345"}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-1 ">
          <div className=" rounded-lg py-1.5 ">
            <p className="text-xs uppercase text-gray-400">Session</p>
            <h2 className="font-semibold text-blue-400 text-sm">
              {player?.session || "2023-24"}
            </h2>
          </div>
          <div className=" rounded-lg py-1.5  ">
            <p className="text-xs uppercase text-gray-400">Base Price</p>
            <h2 className="font-semibold text-blue-400 text-sm">
              {player?.basePrice || "110"}
            </h2>
          </div>
          <div className=" rounded-lg py-1.5 ">
            <p className="text-xs uppercase text-gray-400">Category</p>
            <h2 className="font-semibold text-blue-400 text-sm">
              {player?.category || "A"}
            </h2>
          </div>
          <div className=" rounded-lg py-1.5">
            <p className="text-xs uppercase text-gray-400">Position</p>
            <h2 className="font-semibold text-blue-400 text-sm">
              {player?.position || "A"}
            </h2>
          </div>
        </div>

        {/* Performance Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="py-1.5">
            <h2 className="font-semibold text-blue-400">
              {player?.goals?.goal || "24"}
            </h2>
            <p className="text-xs uppercase text-gray-400">Goals</p>
          </div>
          <div className=" py-1.5">
            <h2 className="font-semibold text-blue-400">
              {player?.assists.goal || "110"}
            </h2>
            <p className="text-xs uppercase text-gray-400">Assists</p>
          </div>
          <div className="py-1.5">
            <h2 className="font-semibold text-blue-400">
              {player?.matches?.length || "A"}
            </h2>
            <p className="text-xs uppercase text-gray-400">Matches</p>
          </div>
          <div className="py-1.5">
            <div className="flex justify-center items-center gap-3">
              <h2 className="font-semibold text-red-400">
                {player?.redcard || "2"}
              </h2>
              <h2 className="font-semibold text-yellow-400">
                {player?.yellowcard || "3"}
              </h2>
            </div>
              <p className="text-xs uppercase text-gray-400">Cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
