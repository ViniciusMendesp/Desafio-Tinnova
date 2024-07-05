import { User } from "./get-users";

export const createUser = (newUser: User): void => {
  const usersStr = localStorage.getItem("users");
  let users: User[] = [];

  if (usersStr) {
    users = JSON.parse(usersStr);
  }

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
};
