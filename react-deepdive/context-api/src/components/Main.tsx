import Sub from "./Sub";
import { useTheme } from "./ThemeProvider";
import { User, useUserContext } from "./UserProvider";

export default function Main() {
  console.log("Main");
  const { user, setUser } = useUserContext();
  return (
    <div>
      <h1>Main</h1>
      <h2>나이 : {user.age}</h2>
      <button
        onClick={() =>
          setUser((user) => {
            return { ...user, age: user.age + 1 };
          })
        }
      >
        나이 + 1
      </button>
      <Sub value="in Main" />
    </div>
  );
}
