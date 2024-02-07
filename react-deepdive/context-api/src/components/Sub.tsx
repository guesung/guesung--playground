import { memo } from "react";

interface SubProps {
  value: string;
}
export default memo(function Sub({ value }: SubProps) {
  console.log(value);

  return <h1>Sub</h1>;
});
