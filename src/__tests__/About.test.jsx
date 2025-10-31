import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../components/Navbar/About/About";

describe("About component", () => {
  test("renders about section", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    // getAllByText to handle multiple matches
    const aboutElements = screen.getAllByText(/about/i);
    expect(aboutElements.length).toBeGreaterThan(0);
  });
});
