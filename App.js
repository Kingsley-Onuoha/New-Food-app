import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import About from "./src/components/About"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Error from "./src/components/Error"
import SignIn from "./src/components/SignIn"
import Cart from "./src/components/Cart"
import RestaurantMenu from "./src/components/RestaurantMenu"

const App = ()=>{
  return(
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
{
  path:"/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />
    },
  ]
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)