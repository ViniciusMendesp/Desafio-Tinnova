import Users from "@/app/users/page";
import { render, screen } from "@testing-library/react";

describe("Users page", () => {
  it("renders Users page correctly", () => {
    render(<Users />);

    const titleElement = screen.getByText(/Lista de usuários cadastrados/i);
    expect(titleElement).toBeInTheDocument();
  });
});
