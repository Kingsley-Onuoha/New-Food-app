import React, { Suspense, lazy, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import About from "./src/components/About"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Error from "./src/components/Error"
import SignIn from "./src/components/SignIn"
import RestaurantMenu from "./src/components/RestaurantMenu"
import UserContext from "./src/utils/UserContext"
import { Provider, useDispatch } from "react-redux"
import appStore from "./src/utils/appStore"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux"
import { getTotals } from "./src/utils/cartSlice"


const Cart = lazy(()=> import("./src/components/Cart"))

const App = ()=>{

  
  const [userInfo, setUserInfo] = useState()



  useEffect(()=>{
  
    const data = {
      name : "Kingsley"
    }
    setUserInfo(data.name)
  }, [])

  

  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userInfo}}>
      <ToastContainer />
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
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