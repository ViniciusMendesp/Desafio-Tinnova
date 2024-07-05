// TableUsers.tsx

import { User } from "@/api/get-users";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

interface TableUsersProps {
  users: User[];
  onDelete: (index: number) => void;
}

export const TableUsers = ({ users, onDelete }: TableUsersProps) => {
  return (
    <Table>
      <TableCaption>Lista de usuários cadastrados</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Nome Completo</TableHead>
          <TableHead>CPF</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.cpf}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="flex justify-end">
              <Button
                onClick={() => onDelete(index)}
                size="icon"
                variant="destructive"
                data-testid={`delete-user-${index}`}
              >
                <Trash size={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
