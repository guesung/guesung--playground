import { memo } from "react";
import { useRecoilValue } from "recoil";
import { userNameSelector } from "../store";

export default memo(function Sub({ value }) {
  console.log("Sub", value);

  const userName = useRecoilValue(userNameSelector);

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
});
