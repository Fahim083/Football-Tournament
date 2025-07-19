import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<HomePage />} />
      </Route>
    )
  );

  return (
    <>
      <h1 class="text-3xl font-bold text-red-400">Hello world!</h1>
    </>
  );
}

export default App;
