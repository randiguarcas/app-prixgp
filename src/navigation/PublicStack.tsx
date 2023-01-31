import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

type PublicStackNavigatorParamList = {
  home: undefined;
  login: undefined;
  signup: undefined;
  forgot: undefined;
};

type PublicStackNavigationProp =
  NativeStackNavigationProp<PublicStackNavigatorParamList>;

const Stack = createNativeStackNavigator<PublicStackNavigatorParamList>();

export default function PublicStack() {
  const navigation = useNavigation<PublicStackNavigationProp>();

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "",
          headerRight: () => {
            return (
              <Text onPress={() => navigation.navigate("login")}>Ingresar</Text>
            );
          },
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "",
          headerLeft: () => {
            return <Text onPress={() => navigation.goBack()}>Regresar</Text>;
          },
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{
          title: "",
          headerLeft: () => {
            return <Text onPress={() => navigation.goBack()}>Regresar</Text>;
          },
        }}
      />
      <Stack.Screen
        name="forgot"
        component={ForgotPasswordScreen}
        options={{
          title: "",
          headerLeft: () => {
            return <Text onPress={() => navigation.goBack()}>Regresar</Text>;
          },
        }}
      />
    </Stack.Navigator>
  );
}
