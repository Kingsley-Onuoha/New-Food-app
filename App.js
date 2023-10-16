import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import About from "./src/components/About"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = ()=>{
  return(
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)