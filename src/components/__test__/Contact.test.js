import About from "../About"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


test("should load 4 headers in About component",()=>{
    render(<About />)

    const heading = screen.getAllByRole("heading")

    expect(heading.length).toBe(4)

})