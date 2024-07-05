import { ProfileForm } from "@/components/shared/form";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("ProfileForm", () => {
  it("renders ProfileForm correctly", () => {
    render(<ProfileForm />);

    const formElement = screen.getByTestId("profile-form");
    expect(formElement).toBeInTheDocument();

    const nameInput = screen.getByLabelText("Nome completo");
    expect(nameInput).toBeInTheDocument();

    const cpfInput = screen.getByLabelText("CPF");
    expect(cpfInput).toBeInTheDocument();

    const phoneInput = screen.getByLabelText("Telefone");
    expect(phoneInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Cadastrar" });
    expect(submitButton).toBeInTheDocument();
  });

  it("allows user to fill out the form and submit", async () => {
    render(<ProfileForm />);

    const nameInput = screen.getByLabelText("Nome completo");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const cpfInput = screen.getByLabelText("CPF");
    fireEvent.change(cpfInput, { target: { value: "123.456.789-00" } });

    const phoneInput = screen.getByLabelText("Telefone");
    fireEvent.change(phoneInput, { target: { value: "(12) 34567-8901" } });

    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

    // Submeter o formulário
    const submitButton = screen.getByRole("button", { name: "Cadastrar" });
    fireEvent.click(submitButton);

    // Aguardar até que a função onSubmit seja chamada
    await waitFor(() => {
      // Verificar se a função createUser foi chamada com os valores corretos
      expect(localStorage.getItem("users")).toContain("John Doe");
      expect(localStorage.getItem("users")).toContain("123.456.789-00");
      expect(localStorage.getItem("users")).toContain("(12) 34567-8901");
      expect(localStorage.getItem("users")).toContain("john.doe@example.com");

      // Verificar se os campos do formulário foram resetados
      expect(nameInput).toHaveValue("");
      expect(cpfInput).toHaveValue("");
      expect(phoneInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
    });
  });
});
