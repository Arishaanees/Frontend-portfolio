import { render, screen } from "@testing-library/react";
// import Footer from "../components/Footer";
// import Footer from "../components/Footer/Footer";
import Footer from "../components/Navbar/Footer/Footer";

describe("Footer component", () => {
  test("renders contact title", () => {
    render(<Footer />);

    expect(screen.getByText(/contactTitle/i)).toBeInTheDocument();
  });
});
