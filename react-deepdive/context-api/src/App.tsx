import "./App.css";
import Main from "./components/Main";
import Sub from "./components/Sub";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Main />
        <Sub />
        <Sub />
        <Sub />
        <Sub />
      </ThemeProvider>
    </div>
  );
}
