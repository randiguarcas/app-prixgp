import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GarageScreen from "../screens/GarageScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ServicesScreen from "../screens/ServicesScreen";

const Stack = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#1EB3AE",
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5
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
            <Icon type="feather" name="search" color={color} size={size} />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: "Servicios",
          tabBarIcon: ({ color, size }) => (
            <Icon type="feather" name="grid" color={color} size={size} />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Garage"
        component={GarageScreen}
        options={{
          tabBarLabel: "Garage",
          tabBarIcon: ({ color, size }) => (
            <Icon type="font-awesome" name="car" color={color} size={size} />
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
              size={size}
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
            <Icon type="feather" name="user" color={color} size={size} />
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
