import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import About from "./src/components/About"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Error from "./src/components/Error"
import SignIn from "./src/components/SignIn"
import RestaurantMenu from "./src/components/RestaurantMenu"


const Cart = lazy(()=> import("./src/components/Cart"))

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
      element: <Suspense fallback={<h2>Loading...</h2>}><Cart /></Suspense>,
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