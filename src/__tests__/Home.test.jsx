// src/__tests__/Home.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../components/Home/Home";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Home Component", () => {
  it("renders contact button", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // 👇 change this line
    const btn = screen.getByRole("button", { name: /contactBtn/i });
    await userEvent.click(btn);
    expect(mockNavigate).toHaveBeenCalledWith("/contact");
  });
});
