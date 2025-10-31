import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("renders main app component", () => {
    render(<App />);
    expect(screen.getByText(/navHome/i)).toBeInTheDocument();
  });
});
