import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleReactTest = (e) => {
    console.log(e.target.dataset.id);
    console.log(e.target);
  };
  return (
    <div className="App">
      <h1 onClick={handleReactTest} data-id="1">
        React Test
      </h1>
    </div>
  );
}

export default App;
