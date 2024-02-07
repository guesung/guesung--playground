import "./App.css";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </div>
  );
}
