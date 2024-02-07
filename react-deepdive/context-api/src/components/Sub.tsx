import { memo } from "react";
import { useUserContext } from "./UserProvider";

interface SubProps {
  value: string;
}
export default memo(function Sub({ value }: SubProps) {
  console.log(value);
  const { user } = useUserContext();

  return <h1>{user.name}</h1>;
});
