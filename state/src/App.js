import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={handleCount}>{count}</button>
    </div>
  );
}

export default App;
