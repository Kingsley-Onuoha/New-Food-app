import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA_API from "../mocks/mockRestList.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA_API)
        }
    })
})


test("Should search Restaurant List for burger input", async ()=>{

       await act (async ()=> 
        render(
        <BrowserRouter >
            <Body />
        </BrowserRouter>
        ) )

    const searchBtn = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target:{value: "KFC"}})

    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(1)
    
})