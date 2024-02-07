import { create } from "zustand";

interface User {
  userId: number;
  age: number;
  name: string;
}

type UserStoreType = {
  setUserAgePlus: () => void;
} & User;

const useUserStore = create<UserStoreType>((set) => ({
  userId: 0,
  age: 0,
  name: "",
  setUserAgePlus: () => {
    set((state) => {
      return {
        ...state,
        age: state.age + 1,
      };
    });
  },
}));

export { useUserStore };
