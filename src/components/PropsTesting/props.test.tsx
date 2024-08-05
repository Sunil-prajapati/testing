import { prettyDOM, logRoles, render, screen } from "@testing-library/react"
import Props from "./Props"

test("props testing", () => {
    const name = "Tony stark"
    const { container, debug } = render(<Props name={name} />)
    const userName = screen.getByText(`User name:${name}`)
    expect(userName).toBeInTheDocument()
    console.log(prettyDOM(container)) // for debugging
    debug()
    logRoles(container) // to identify the each element
})
