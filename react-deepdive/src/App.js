import logo from './logo.svg';

import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [object, setObject] = useState({ name: "John" });

  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>증가</button>
      <div>{object.name}</div>
      <button
        onClick={() => {
          object.name = "Doe";
          setObject(object);
        }}
      >
        객체의 속성 바꾸기
      </button>
      <button
        onClick={() => {
          object.name = "Doe";
          setObject({ ...object });
        }}
      >
        객체의 참조값 바꾸기
      </button>
    </div>
  );
}

export default App;
