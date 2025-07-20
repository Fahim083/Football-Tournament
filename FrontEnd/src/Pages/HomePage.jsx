import TopScorer from "../Components/TopScorer"
import Result from "../Components/Result"
import Upcoming from "../Components/Upcoming";
import Highlight from "../Components/highlight";

const HomePage = () => {
  return (
    <div>
      <Upcoming />
      <Highlight />
      <TopScorer />
      i am the home page
    </div>
  )
}

export default HomePage
