import { createUser } from "@/api/create-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { act, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "Nome completo deve ter pelo menos 2 caracteres."),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos."),
  email: z.string().email("Email inválido."),
});

type FormData = z.infer<typeof formSchema>;

export function ProfileForm() {
  const [formData, setFormData] = useState<FormData[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
      phone: "",
      email: "",
    },
  });

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setFormData(savedUsers);
  }, []);

  const onSubmit = (values: FormData) => {
    createUser(values);
    setFormData([...formData, values]);
    form.reset();
    toast("Usuário cadastrado com sucesso!", {
      action: {
        label: "Ver usuários",
        onClick: () => {
          act(() => {
            window.location.href = "/users";
          });
        },
      },
    });
  };

  return (
    <div className="flex w-full md:w-[500px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full"
          id="profile-form"
          data-testid="profile-form" // Adicionando data-testid ao formulário
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpf"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input placeholder="Seu CPF" {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="Seu telefone" {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Seu email" {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </Form>
    </div>
  );
}
