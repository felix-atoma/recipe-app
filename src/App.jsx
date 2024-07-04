import Welcome from "../src/pages/Welcome";

import Recipes from "./pages/Recipes";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import NewRecipes from "./pages/NewRecipes";
import Favorites from "./pages/Favorites";
import Categories from "./pages/Categories";

const router = createBrowserRouter ([
  {path: '/',element: <Welcome/> },
  {path: '/recipes', element: <Recipes/>},
  {path: '/categories', element: <Categories/>},
  {path: '/favorites', element: <Favorites/>},
  {path:'/recipes/new', element:<NewRecipes/>}
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
