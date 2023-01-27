import { ThemeProvider } from "@rneui/themed";
import RootNavigator from "./src/navigation/index";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
