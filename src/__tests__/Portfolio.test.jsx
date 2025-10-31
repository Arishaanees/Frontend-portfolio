import { render, screen } from "@testing-library/react";
// import Portfolio from "../components/Portfolio";
// import Portfolio from "../components/Portfolio/Portfolio";
import Portfolio from "../components/Navbar/portfolio/Portfolio";

describe("Portfolio component", () => {
  test("renders skills title", () => {
    render(<Portfolio />);

    expect(screen.getByText(/skillsTitle/i)).toBeInTheDocument();
  });
});
