import Home from "@/app/page";
import "@testing-library/jest-dom"; // Import necessário para usar toBeInTheDocument
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Formulário de cadastro de usuários/i,
    });
    expect(heading).toBeInTheDocument();

    const profileForm = screen.getByText(/Nome completo/i);
    expect(profileForm).toBeInTheDocument();
  });
});
