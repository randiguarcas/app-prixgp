import { ThemeProvider } from "@rneui/themed";
import RootNavigator from "./src/navigation/index";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default function App() {
  return (
    <ThemeProvider>
       <StatusBar backgroundColor="#1EB3AE" />
      <RootNavigator />
    </ThemeProvider>
  );
}
