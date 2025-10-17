
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
import DemoPage from "./Components/DemoPage";
import Player from "./Components/Player";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<MainLayout />}>
        <Route path="" element={<Navigate to="/players"/>} />
        <Route path="home" element={<DemoPage />} />
        <Route path="players" element={<PlayerPage />} />
        <Route path="teams" element={<DemoPage />} />
        <Route path="rules" element={<DemoPage />} />
        <Route path="features" element={<DemoPage />} />
        <Route path="Match"element={<DemoPage />} />
        </Route>
        <Route path="/*" element={<ErrorPage/>} />
      </Route>
    
  

    )
  );

  return <RouterProvider router={router} />;
  
}

export default App;
