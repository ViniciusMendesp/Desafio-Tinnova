import axios from "axios";

export interface User {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
    const response = await axios.get<User[]>(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    throw error;
  }
};
