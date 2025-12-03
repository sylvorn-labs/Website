import { create } from "zustand";

interface IsErrorState {
  isError: boolean;
  setIsError: (value: boolean) => void;
}

export const useIsError = create<IsErrorState>((set) => ({
  isError: false,
  setIsError: (value: boolean) => set({ isError: value }),
}));

interface IsAlreadySignedUp {
  isSignedUp: boolean;
  setIsSignedUp: (value: boolean) => void;
}

export const useIsAlreadySignedUp = create<IsAlreadySignedUp>((set) => ({
  isSignedUp: false,
  setIsSignedUp: (value: boolean) => set({ isSignedUp: value }),
}));
