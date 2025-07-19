import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";

const TopScorer = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["topScorer"],
    queryFn: async () => {
      return await axios.get("http://0.0.0.0:4000/topscorer");
    },
    staleTime: 1000 * 60 * 20, // 20 minutes
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-10 mx-10">
      <h1 className="text-4xl my-5 font-semibold">Top Goal Scorer</h1>
      <div className=" pt-3 border-y-1 border-y-amber-200 my-5">
        <div className="flex justify-around items-center text-2xl font-semibold  pb-6 pt-2 text-blue-400">
          <h4 className="w-60 text-center">Rank</h4>
          <h2 className="w-[500px] text-center">Player</h2>
          <h4 className="w-60 text-center">Goals</h4>
          <h4 className="w-60 text-center">Assists</h4>
        </div>

        <div>
          {data &&
            data.data.map((player, index) => (
              <div
                key={index}
                className="flex justify-around items-center text-xl font-medium border-t-2 border-t-white py-6 "
              >
                <h4 className="w-60 text-center">{index + 1} </h4>
                <h2 className="w-[500px] text-center">{player.name}</h2>
                <h4 className="w-60 text-center">{player.goals}</h4>
                <h4 className="w-60 text-center">{player.assists}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopScorer;
