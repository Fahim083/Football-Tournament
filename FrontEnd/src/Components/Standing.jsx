import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import logo from '../assets/react.svg';
import Loading from "./Loading";

const Standing = () => {
  const {data,isLoading} = useQuery({
    queryKey: ['standing'],
    queryFn: async () => {
      return await axios.get("http://0.0.0.0:4000/standing")},
    staleTime: 1000 * 60 * 20, // 20 minutes
  });

  const GroupA = data && data.data.filter(team => team.group === 'A');
  const GroupB = data && data.data.filter(team => team.group === 'B');
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mx-5">
        <div className="bg-[rgba(39,39,39)] text-white rounded-sm w-full border-1 border-gray-700 mt-6 mb-10 ">
      <div className="flex justify-between items-center  p-4">

        <h3 className="text-2xl">Group A </h3>
        <div className="w-[600px] flex gap-40 justify-between items-center">
          <p className="w-[150px] text-center" >P</p>
         <p className="w-[150px] text-center" >W</p>
           <p className="w-[150px] text-center" >D</p>
            <p className="w-[150px] text-center" >L</p>
        </div>
      </div>
      {GroupA && GroupA.map((team, index) => ( 
      <div key={team.id} className="flex justify-between items-center p-4 border-t-2 border-gray-700">
        <div className="flex gap-3 items-center pl-3"
             style={{ borderLeft : index < 2 ? '6px solid green': ''}}>
        <img src={logo} alt="team logo" className="w-5 h-5"/>
        <h3 className="text-xl">{team.teamName}</h3>
        </div>
        <div className="w-[600px] flex gap-40 justify-between items-center">
            <p className="w-[150px] text-center" >{(team.matchWin*3) + (team.matchDraw*1)}</p>
            <p className="w-[150px] text-center" >{team.matchWin}</p>
             <p className="w-[150px] text-center" >{team.matchDraw}</p>
             <p className="w-[150px] text-center" >{team.matchLost}</p>
        </div>
      </div>
       ))}
     </div>
        <div className="bg-[rgba(39,39,39)] text-white rounded-sm w-full border-1 border-gray-700 mb-6 ">
      <div className="flex justify-between items-center  p-4">

        <h3 className="text-2xl">Group B </h3>
        <div className="w-[600px] flex gap-40 justify-between items-center">
          <p className="w-[150px] text-center" >P</p>
         <p className="w-[150px] text-center" >W</p>
           <p className="w-[150px] text-center" >D</p>
            <p className="w-[150px] text-center" >L</p>
        </div>
      </div>
      {GroupB && GroupB.map((team, index) => ( 
      <div key={team.id} className="flex justify-between items-center p-4 border-t-2 border-gray-700">
        <div className="flex gap-3 items-center pl-3"
             style={{ borderLeft : index < 2 ? '6px solid green': ''}}>
        <img src={logo} alt="team logo" className="w-5 h-5"/>
        <h3 className="text-xl">{team.teamName}</h3>
        </div>
        <div className="w-[600px] flex gap-40 justify-between items-center">
            <p className="w-[150px] text-center" >{(team.matchWin*3) + (team.matchDraw*1)}</p>
            <p className="w-[150px] text-center" >{team.matchWin}</p>
             <p className="w-[150px] text-center" >{team.matchDraw}</p>
             <p className="w-[150px] text-center" >{team.matchLost}</p>
        </div>
      </div>
       ))}
      {/* <div className="flex justify-between items-center p-6 border-t-2 border-gray-700">
        <h3>My Team</h3>
        <div className="w-[600px] flex gap-40 justify-between items-center">
            <p>11</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
        </div>
      </div> */}
     </div>

    </div>
  );
};

export default Standing;
