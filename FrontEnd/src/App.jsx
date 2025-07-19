
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
  

// layouts
import MainLayout from "./Layouts/MainLayout";


// pages
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<MainLayout />}>
        <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="/*" element={<ErrorPage/>} />
      </Route>
    
  

    )
  );

  return <RouterProvider router={router} />;
  
}

export default App;
