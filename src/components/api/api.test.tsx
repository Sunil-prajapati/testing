
import { render, screen } from "@testing-library/react";
import Api from "./Api";
test("test handling", () => {
    render(<Api />)
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument()
})

test("render API Testing", async () => {
    render(<Api />)
    const elements = await screen?.findAllByRole("listitem")
    expect(elements).toHaveLength(100)
})