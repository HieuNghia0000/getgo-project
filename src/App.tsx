import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import Search from "./components/Search.tsx";

function App() {
  const router = createBrowserRouter([
      {
          path: "/",
          element: <HomePage />
      },
      {
          path: "/search",
          element: <Search />
      }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
