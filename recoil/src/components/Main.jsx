import { useRecoilState } from "recoil";
import { userState, useUserState } from "../store";
import Sub from "./Sub";

export default function Main() {
  console.log("Main");
  const [user, setUser] = useRecoilState(userState);

  const handleButton = () => setUser({ ...user, age: user.age + 1 });

  return (
    <div>
      <h1>Main</h1>
      <h2>나이 : {user.age}</h2>
      <button onClick={handleButton}>나이 + 1</button>
      <Sub value="in Main" />
    </div>
  );
}
