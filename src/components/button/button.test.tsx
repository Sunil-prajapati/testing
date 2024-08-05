import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import handleOther from "@/helper/helper";


test("Button onClick Test", () => {
    render(<Button />)
    const btn = screen.getByTestId("testing");
    fireEvent.click(btn)
    expect(screen.getByText('Update data')).toBeInTheDocument()
})

// test("snapshot for button", () => {
//     const btnContainer = render(<Button />)
//     expect(btnContainer).toMatchSnapshot();
// })

test("functional component method testing", () => {
    render(<Button />)
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn)
    expect(screen.getByText('Functional component update!')).toBeInTheDocument()
})

test("method testing outside the file", () => {
    expect(handleOther()).toMatch("hi")
})