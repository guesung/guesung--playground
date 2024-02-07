interface Subprops {
  value: string;
}

export default function Sub({ value }: Subprops) {
  console.log(value);
  return (
    <div>
      <h1>Sub</h1>
    </div>
  );
}
