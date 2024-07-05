import { Navbar } from "@/components/shared/navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar component", () => {
  it("renders Navbar component correctly", () => {
    render(<Navbar />);

    const formLink = screen.getByText("Formulário");
    expect(formLink).toBeInTheDocument();

    const usersLink = screen.getByText("Usuários");
    expect(usersLink).toBeInTheDocument();

    expect(formLink.getAttribute("href")).toBe("/");
    expect(usersLink.getAttribute("href")).toBe("/users");
  });
});
