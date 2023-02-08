import { NavigationContainer } from "@react-navigation/native";
// import PublicStackNavigator from "./PublicStack";
import AppStackNavigator from "./AppStack";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
