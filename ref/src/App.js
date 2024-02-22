import { useRef, useState } from "react";

function App() {
  const ref = useRef(1);
  const [count, setCount] = useState(0);

  console.log(ref);
  ref.current++;
  console.log(ref);

  return (
    <div className="App">
      {ref.current}
      <button
        onClick={() => {
          ref.current++;
          setCount(count + 1);
          console.log(ref.current);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
