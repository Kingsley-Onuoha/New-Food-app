import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import ActiveCart from "../ActiveCart"
import Cart from "../Cart"
import { act } from "react-dom/test-utils"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_MENU_DATA from "../mocks/mockRestMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"


global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_MENU_DATA)
    })
)


describe ("Restaurant Menu and Cart Test Cases", ()=>{

    test("Should Load Restaurant Menu Component", async()=>{
        await act (async () =>
        render(
        <BrowserRouter >
            <Provider store={appStore}>
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
        )
        )

        const accordionHeader = screen.getByText("Garlic Bread (6)")

        fireEvent.click(accordionHeader)

        const foodItems = screen.findAllByTestId("foodItems")

        expect( (await foodItems).length).toBe(6)
    })

    test("Should add Item to Cart when Add + button is clicked", async()=>{
        await act (async () =>
        render(
        <BrowserRouter >
            <Provider store={appStore}>
                <RestaurantMenu />
                <Header />
            </Provider>
        </BrowserRouter>
        )
        )

        const addToCartBtn = screen.getAllByRole("button", {name:"Add +"})
    

        fireEvent.click(addToCartBtn[0])

        expect(screen.getByText("1")).toBeInTheDocument()

    })

    test("Should Cart clear button", async()=>{
        await act (async () =>
        render(
        <BrowserRouter >
            <Provider store={appStore}>
                <RestaurantMenu />
                <Header />
                <ActiveCart/>
                <Cart />
            </Provider>
        </BrowserRouter>
        )
        )

        const clearBtn = screen.getAllByRole("button", {name: "Clear cart"})

        fireEvent.click(clearBtn[0])

        expect(screen.getByText("Your cart is empty")).toBeInTheDocument()
    })

})