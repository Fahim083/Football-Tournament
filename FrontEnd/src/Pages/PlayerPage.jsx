import { IoSearchSharp } from "react-icons/io5";
import Player from "../Components/Player";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Components/Loading";
import { useState, useEffect } from "react";

const PlayerPage = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ["players"],
    queryFn: async () =>
      await axios.get(
        "https://aa-ten-psi.vercel.app/players"
      ),
    staleTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    if (data) {
      console.log(data.data);
      setPlayers(data.data);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  const categories = ["All", "Category A", "Category B", "Category C"];

  const filteredPlayers = players.filter((player) => {
    const matchCategory =
      category === "All" || player.category === category;
    const matchSearch = player.name
      ?.toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-5">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-5 border-b pb-3 sm:pb-5 mb-4 sm:mb-5">
        {/* Categories */}
        <div className="flex flex-wrap  gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`sm:px-4 py-0.5 sm:py-1 text-md sm:text-lg rounded-full sm:border transition-all duration-200 ${
                category === cat
                  ? "sm:bg-blue-600 text-blue-400 sm:text-white border-blue-600 font-semibold"
                  : "sm:bg-white text-white sm:text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search bar */}
        {/* <div className="relative w-full sm:w-64">
          <IoSearchSharp className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search players..."
            className="border rounded-full w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        */}
        </div>  

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-4 sm:mb-6">
        {category === "All" ? "All Players" : category}
      </h3>

      {/* Players List */}

      <div className="grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 px-2 mb-4 sm:mb-6 ">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <Player key={player._id} player={player} />
          ))
        ) : (
          <p>No players found</p>
        )}
      </div>
    </div>
  );
};

export default PlayerPage;
