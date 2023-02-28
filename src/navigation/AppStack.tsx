import { useFonts } from "expo-font";
import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@src/screens/HomeScreen";
import GarageScreen from "@src/screens/GarageScreen";
import ChatScreen from "@src/screens/ChatScreen";
import ProfileScreen from "@src/screens/ProfileScreen";
import ServicesScreen from "@src/screens/ServicesScreen";

const Stack = createBottomTabNavigator();

export default function AppStack() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Light": require("../../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("../../assets/fonts/OpenSans-Medium.ttf"),
  });

  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#1EB3AE",
        tabBarStyle: {
          height: 60,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "OpenSans-Medium",
          paddingBottom: 8,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <Icon type="feather" name="search" color={color} size={20} />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: "Servicios",
          tabBarIcon: ({ color, size }) => (
            <Icon type="feather" name="grid" color={color} size={20} />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Garage"
        component={GarageScreen}
        options={{
          tabBarLabel: "Mi garage",
          tabBarIcon: ({ color, size }) => (
            <Icon type="font-awesome" name="car" color={color} size={20} />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "Mensajes",
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Icon
              type="feather"
              name="message-circle"
              color={color}
              size={20}
            />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Iniciar sesión",
          tabBarIcon: ({ color, size }) => (
            <Icon type="feather" name="user" color={color} size={20} />
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
