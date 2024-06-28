import Welcome from "../src/pages/Welcome";
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";

const router =createBrowserRouter([
  {path: '/',element: <Welcome/> },
  {path: '/recipes', element: <Recipes/>},
  {path: '/categories', element: <Categories/>}
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
