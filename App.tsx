import { NativeBaseProvider } from "native-base";
import RootNavigator from "./src/navigation/index";

export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
}
