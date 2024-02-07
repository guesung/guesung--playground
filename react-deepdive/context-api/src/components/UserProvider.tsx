import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

export interface User {
  userId: number;
  name: string;
  age: number;
}

const defaultUserValue = {
  userId: 0,
  name: "",
  age: 0,
};

type UserContextType = {
  user: User;
  setUser: Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("no user context!");
  return context;
};

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState(defaultUserValue);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { useUserContext, UserProvider };
