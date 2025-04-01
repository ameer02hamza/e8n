"use client";
import { registerUser, authenticateUser } from "@/services/firebase";
import { LoginUser, SignupUser } from "@/types/auth.type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "nextjs-toast-notify";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface contextProps {
  displayName: string | null;
  authToken: string | null;
  loginLoading: boolean;
  regLoading: boolean;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  loginUser: (login: LoginUser) => Promise<void>;
  logout: () => Promise<void>;
  signupUser: (signup: SignupUser) => Promise<void>;
}

const AuthContext = createContext<contextProps>({
  displayName: null,
  authToken: null,
  loginLoading: false,
  regLoading: false,
  error: null,
  setError: () => {},
  loginUser: async () => {},
  logout: async () => {},
  signupUser: async () => {},
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [displayName] = useState<string | null>(null);
  const [authToken] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [regLoading, setRegLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
const logout = async()=>{
  try {
    await axios.delete("/api/session");
    router.push("/")
  } catch (error) {
    console.log(error);
    
    
  }
}

  const loginUser = async (login: LoginUser) => {
    try {
      setLoginLoading(true);
      const resp = await authenticateUser(login);
      if (resp == undefined) {
        return;
      }
      const { token } = await resp.user.getIdTokenResult();
      console.log(token);
      const data = {
        token: token,
      };
      await axios.post("/api/session", data);
        router.push("/movies");
    } catch (error) {
      toast.error(error?.code, {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        icon: "",
        sound: true,
      });
      setLoginLoading(false);
    } finally {
      setLoginLoading(false);
    }
  };
  const signupUser = async (signup: SignupUser) => {
    try {
      setRegLoading(true);
      await registerUser(signup);
      router.push("/");
    } catch (error) {
      console.log("error", error?.code);
      toast.error(error?.code, {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        icon: "",
        sound: true,
      });
      setRegLoading(false);
    } finally {
      setRegLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        displayName,
        authToken,
        loginLoading,
        regLoading,
        error,
        setError,
        logout,
        loginUser,
        signupUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
