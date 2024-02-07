import { useTheme } from "./ThemeProvider";

export default function Main() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h1>Main</h1>
      <p>{theme}</p>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}