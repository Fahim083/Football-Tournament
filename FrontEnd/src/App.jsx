
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate, 
} from "react-router-dom";
  

// layouts
import MainLayout from "./Layouts/MainLayout";


// pages
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import PlayerPage from "./Pages/PlayerPage";
import MatchPage from "./Pages/MatchPage";
import RulePage from "./Pages/RulePage";
import FeaturePage from "./Pages/FeaturePage";
import TeamsPage from "./Pages/TeamsPage";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<MainLayout />}>
        <Route path="" element={<Navigate to="/home"/>} />
        <Route path="home" element={<HomePage />} />
        <Route path="players" element={<PlayerPage />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="rules" element={<RulePage />} />
        <Route path="features" element={<FeaturePage />} />
        <Route path="Match" element={<MatchPage />} />
        </Route>
        <Route path="/*" element={<ErrorPage/>} />
      </Route>
    
  

    )
  );

  return <RouterProvider router={router} />;
  
}

export default App;
