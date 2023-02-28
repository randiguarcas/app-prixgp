import { StatusBar } from "react-native";
import { ThemeProvider } from "@rneui/themed";
import RootNavigator from "@src/navigation";

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar backgroundColor="#1EB3AE" />
      <RootNavigator />
    </ThemeProvider>
  );
}
