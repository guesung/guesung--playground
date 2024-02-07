import { useUserStore } from "../store/user";
import Sub from "./Sub";

export default function Main() {
  console.log("Main");
  const age = useUserStore((state) => state.user.age);
  const setUserAgePlus = useUserStore((state) => state.setUserAgePlus);
  return (
    <div>
      <h1>Main</h1>
      <h2>나이 : {age}</h2>
      <button onClick={setUserAgePlus}>나이 + 1</button>
      <Sub value="in Main" />
    </div>
  );
}
