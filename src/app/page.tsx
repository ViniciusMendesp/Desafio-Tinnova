"use client";
import { ProfileForm } from "@/components/shared/form";

export default function Home() {
  return (
    <main className="flex  gap-6 flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-center">
        Formulário de cadastro de usuários
      </h1>
      <ProfileForm />
    </main>
  );
}
