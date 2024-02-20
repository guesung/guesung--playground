import { useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks";

function App() {
  const [state, setState] = useState("");
  const debouncedValue = useDebounce({ data: state });

  const handleDebounceInputChange = (e: any) => {
    setState(e.target.value);
  };


  return (
    <div className="App">
      <input onChange={handleDebounceInputChange} />
      <div>{debouncedValue}</div>
    </div>
  );
}

export default App;
