import { TableUsers } from "@/components/shared/table-users";
import { fireEvent, render, screen } from "@testing-library/react";

describe("TableUsers component", () => {
  it("renders TableUsers component correctly", () => {
    const mockUsers = [
      {
        name: "John Doe",
        cpf: "123.456.789-00",
        phone: "(12) 3456-7890",
        email: "john.doe@example.com",
      },
      {
        name: "Jane Smith",
        cpf: "987.654.321-00",
        phone: "(34) 5678-9012",
        email: "jane.smith@example.com",
      },
    ];

    render(<TableUsers users={mockUsers} onDelete={() => {}} />);

    const nameCell = screen.getByText("John Doe");
    expect(nameCell).toBeInTheDocument();

    const cpfCell = screen.getByText("123.456.789-00");
    expect(cpfCell).toBeInTheDocument();

    const phoneCell = screen.getByText("(12) 3456-7890");
    expect(phoneCell).toBeInTheDocument();

    const emailCell = screen.getByText("john.doe@example.com");
    expect(emailCell).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", () => {
    const mockUsers = [
      {
        name: "John Doe",
        cpf: "123.456.789-00",
        phone: "(12) 3456-7890",
        email: "john.doe@example.com",
      },
    ];

    const onDeleteMock = jest.fn();
    render(<TableUsers users={mockUsers} onDelete={onDeleteMock} />);

    const deleteButton = screen.getByTestId("delete-user-0");
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
