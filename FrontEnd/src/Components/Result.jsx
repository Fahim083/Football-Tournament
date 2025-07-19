import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";

const Result = () => {
  const {data,isLoading} = useQuery({
    queryKey: ['highlights'],
    queryFn: async () => {
      return await axios.get("http://0.0.0.0:4000/highlights/")
    },
    staleTime: 1000 * 60 * 20, // 20 minutes
  });
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div className="my-10">
      <h1 className="text-4xl font-medium my-3 pb-4">Highlights</h1>
      <div className="flex justify-between">
        {data && data.data.map((match, index) => (
      <div key={match.id} className="bg-[rgba(39,39,39)] text-white p-5 rounded-sm w-[450px] border-1 border-gray-700">
        <h4 className="text-xm">Tournament name</h4>
        <div className="flex justify-between items-center">
          <h5 className="text-sm">{match.matchCategory}</h5>
          <h5 className="text-sm">{match.matchDate}</h5>
        </div>
        <div className="mt-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={match.firstTeamLogo} alt="team-logo" />
            <h3 className="text-xl">{match.firstTeamName}</h3>
          </div>
          <h3 className="text-xl" >{match.firstTeamScore}</h3>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={match.secondTeamLogo} alt="team-logo" />
            <h3 className="text-xl">{match.secondTeamName}</h3>
          </div>
          <h3 className="text-xl">{match.secondTeamScore}</h3>
        </div>
          </div>
      </div>

      )
     )
    }
    </div>
    </div>
  );
};

export default Result;
