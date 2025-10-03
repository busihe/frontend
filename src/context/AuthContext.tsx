import { createContext, useContext } from "react";

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

// Auth context type now includes isAuthenticated
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean; // ✅ added
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<void>;
}

// Create context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false, // ✅ default
  login: async () => { throw new Error("login function not implemented"); },
  logout: () => {},
  register: async () => {},
});

// Hook for consuming context
export const useAuth = () => useContext(AuthContext);
