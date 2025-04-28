import { UserType } from "@/app/types/user";

export type AuthContextType = {
    user: UserType | null;
    authLoading: boolean;
    refreshUser: () => Promise<void>;
    setUser: (u: UserType | null) => void;
    authHydrated: boolean;
}