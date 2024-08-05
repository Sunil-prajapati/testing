import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

// beforeAll(() => {
//   console.log("***** beforeAll ******")
// });

// beforeEach(() => {
//   console.log("***** beforeEach ******")
// });



// test("input component", () => {
//   render(<Input />);
//   const checkInput = screen.getByRole("textbox");
//   const checkInputPlaceholder = screen.getByPlaceholderText('Enter a user name')
//   expect(checkInputPlaceholder).toBeInTheDocument();
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute('name', 'username')
// });


test("onChange", () => {
  render(<Input />)
  const input: HTMLInputElement = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'a' } })
  expect(input.value).toBe("a")
})

test("Assertion method", () => {
  render(<Input />)
  const input: HTMLInputElement = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
  expect(input).toHaveValue("empty string")
  expect(input).toBeEnabled()


})