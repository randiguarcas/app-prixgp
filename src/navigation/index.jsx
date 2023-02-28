import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from "@src/navigation/AppStack";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
