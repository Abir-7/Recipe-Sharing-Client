import { IAuthUser } from "@/interface/auth.inteface";
import { getCurrentUser } from "@/services/AuthService";
import {
  createContext,
  SetStateAction,
  Dispatch,
  ReactNode,
  useState,
  useEffect,
  useMemo,
} from "react";

export interface IUserProviderValues {
  user: IAuthUser | null;
  isLoading: boolean;
  setUser: (user: IAuthUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IUserProviderValues | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null); // Handle the case where user fetch fails
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUser(); // Only run on mount
  }, []); // No dependencies, runs once on mount

  const value = useMemo(
    () => ({ user, isLoading, setUser, setIsLoading }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
