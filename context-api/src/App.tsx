import "./App.css";
import Main from "./components/Main";
import Sub from "./components/Sub";
import { ThemeProvider } from "./components/ThemeProvider";
import UserProvider from "./components/UserProvider";

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <ThemeProvider>
          <Main />
          <Sub value="in ThemeProvider" />
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}
