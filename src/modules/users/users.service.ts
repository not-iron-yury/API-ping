// Эмулированные данные

let userIdCounter = 1;

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// -----------------------------------------------//
// логика (пока что) привязанная к эмулированным данным

export const createUser = (name: string, email: string) => {
  return {
    id: userIdCounter++,
    name,
    email,
  };
};

export const getAllUsers = () => {
  return users;
};

export const getUserById = (id: number) => {
  return users.find((user) => user.id === id);
};

export const deleteUser = (id: number) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;

  users.splice(index, 1);
  return true;
};
