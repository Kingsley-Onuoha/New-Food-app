import {screen, render, fireEvent} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("Heading test cases", ()=>{
    test("Should load Header component with a login button", ()=>{

        render(
       < BrowserRouter>
            <Provider store={appStore}>
                <Header/> 
            </Provider>
        </BrowserRouter>
        )
    
        const loginButton = screen.getByRole("button")
    
        expect(loginButton).toBeInTheDocument()
        
    })

    test("Should load Header component with a Cart Component", ()=>{

        render(
       < BrowserRouter>
            <Provider store={appStore}>
                <Header/> 
            </Provider>
        </BrowserRouter>
        )
    
        const cartComponent = screen.getByText(/Cart/)
    
        expect(cartComponent).toBeInTheDocument()
        
    })

    test("Should have login change to logout on click", ()=>{

        render(
       < BrowserRouter>
            <Provider store={appStore}>
                <Header/> 
            </Provider>
        </BrowserRouter>
        )
    
        const loginButton = screen.getByRole("button",{name: "Login"})

        fireEvent.click(loginButton)

        const logoutButton = screen.getByRole("button",{name: "Logout"})
    
        expect(logoutButton).toBeInTheDocument()
        
    })
})
