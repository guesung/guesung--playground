import { memo } from "react";
import { useUserStore } from "../store/user";

interface Subprops {
  value: string;
}

export default memo(function Sub({ value }: Subprops) {
  console.log("Sub " + value);
  const name = useUserStore((state) => state.user.name);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
});
