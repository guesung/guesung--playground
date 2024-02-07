import { create } from "zustand";

interface User {
  userId: number;
  age: number;
  name: string;
}

type UserStoreType = {
  user: User;
  setUserAgePlus: () => void;
}; 

const useUserStore = create<UserStoreType>((set) => ({
  user: {
    userId: 0,
    age: 0,
    name: "",
  },
  setUserAgePlus: () => {
    set((state) => ({ user: { ...state.user, age: state.user.age + 1 } }));
  },
}));

export { useUserStore };
