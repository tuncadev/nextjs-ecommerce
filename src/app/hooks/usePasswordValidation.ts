import { useMemo } from "react";

type ValidationState = {
  length: boolean;
  capital: boolean;
  special: boolean;
  isValid: boolean;
};

export function usePasswordValidation(password: string): ValidationState {
  return useMemo(() => {
    const length = password.length >= 8;
    const capital = /[A-Z]/.test(password);
    const special = /[^A-Za-z0-9]/.test(password);
    const isValid = length && capital && special;

    return { length, capital, special, isValid };
  }, [password]);
}
