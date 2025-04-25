import { UserType } from "@/app/types/user";

export type AuthContextType = {
    user: UserType | null;
    loading: boolean;
    refreshUser: () => Promise<void>;
    setUser: (u: UserType | null) => void;
    hydrated: boolean;
}