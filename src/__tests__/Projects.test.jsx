import { render, screen } from "@testing-library/react";
import Projects from "../components/Navbar/Projects/Projects";

describe("Projects component", () => {
  test("renders projects title", () => {
    render(<Projects />);
    const titleElement = screen.getByText(/projectTitle/i);
    expect(titleElement).toBeInTheDocument();
  });
});
