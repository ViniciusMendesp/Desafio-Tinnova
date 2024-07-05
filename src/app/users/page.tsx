"use client";

import { getUsers, User } from "@/api/get-users";
import { TableUsers } from "@/components/shared/table-users";
import { useEffect, useState } from "react";

export default function Users() {
  const [formData, setFormData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

        if (savedUsers.length === 0) {
          savedUsers = await getUsers();
        }

        setFormData(savedUsers);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (index: number) => {
    const updatedData = formData.filter((_, i: number) => i !== index);
    setFormData(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData));
  };

  return (
    <main className="flex gap-6 flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-center">
        Lista de usuários cadastrados
      </h1>
      <div className="w-full">
        {formData.length === 0 ? (
          <p>Nenhum usuário cadastrado ainda.</p>
        ) : (
          <TableUsers users={formData} onDelete={handleDelete} />
        )}
      </div>
    </main>
  );
}
