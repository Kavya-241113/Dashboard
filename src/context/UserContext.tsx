
import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../types/User';

interface UserContextProps {
  users: User[];
  addUser: (user: User) => void;
  editUser: (user: User) => void;
  deleteUser: (id: string) => void;
}

const initialUsers: User[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'User' },
];

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const addUser = (user: User) => setUsers((prev) => [...prev, user]);
  const editUser = (updatedUser: User) => {
    setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };
  const deleteUser = (id: string) => setUsers((prev) => prev.filter((user) => user.id !== id));

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
