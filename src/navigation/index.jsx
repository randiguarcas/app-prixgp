import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import PublicStackNavigator from "./PublicStack";

export default function RootNavigator() {
  const [user, setUser] = useState();

  return (
    <NavigationContainer>
      <PublicStackNavigator />
    </NavigationContainer>
  );
}
