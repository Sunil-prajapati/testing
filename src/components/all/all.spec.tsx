import { render, screen } from "@testing-library/react";
import All from "./All";

test("getBy All role", () => {
    render(<All />)
    const btns = screen.getAllByRole("button");
    for (let i = 0; i < btns.length; i++) {
        expect(btns?.[i]).toBeInTheDocument()

    }
})