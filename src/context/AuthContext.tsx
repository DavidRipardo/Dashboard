import { createContext } from "react";

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextstates {
  user: User | null;
  isAutenticado: boolean;
  loginUser: (formdata: LoginData ) => Promise<void>
  logoutUser: () => void
}

export const AuthContext = createContext<AuthContextstates>({
  user: null,
  isAutenticado: false,
  loginUser: async () => {},
  logoutUser: () => {},
});
