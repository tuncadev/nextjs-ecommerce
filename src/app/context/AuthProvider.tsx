"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { UserType } from "@/app/types/user";
import { AuthContextType } from "@/app/types/authContext";

const AuthContext = createContext<AuthContextType>({
  user: null,
  authLoading: true,
  refreshUser: async () => {},
  setUser: () => {},
  authHydrated: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authHydrated, setAuthHydrated] = useState(false);


  const refreshUser = async () => {
    setAuthLoading(true);
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      const data = await res.json();
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
    setAuthHydrated(true);
  }, []);

  useEffect(() => {
    const logoutToast = localStorage.getItem("showLogoutToast");
    if (logoutToast) {
      toast("Бувай! 👋", {
        icon: "😢",
        style: { background: "#333", color: "#fff" },
      });
      localStorage.removeItem("showLogoutToast");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, authLoading, refreshUser, setUser, authHydrated}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
