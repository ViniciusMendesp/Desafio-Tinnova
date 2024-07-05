import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-primary text-white font-bold">
      <ul className="flex justify-between md:justify-center md:gap-9">
        <li>
          <Link href="/">Formulário</Link>
        </li>
        <li>
          <Link href="/users">Usuários</Link>
        </li>
      </ul>
    </nav>
  );
};
