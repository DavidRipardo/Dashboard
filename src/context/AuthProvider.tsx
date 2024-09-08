import { ReactNode, useState } from "react";
import { AuthContext, User } from "./AuthContext";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginData {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAutenticado, setIsAutenticado] = useState<boolean>(false);
  const navigate = useNavigate()

  async function loginUser(formData: LoginData) {
    try {
      const response = await api.post("/login", formData);
      const { user, accessToken } = response.data;

      setUser(user); 
      setIsAutenticado(true); 
      localStorage.setItem("token", accessToken); 
      navigate('/dashboard', {replace: true})
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response)
      }
      console.log(error)
    }
  }

  function logoutUser() {
    setUser(null);
    setIsAutenticado(false);
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <AuthContext.Provider
      value={{ user, isAutenticado, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

