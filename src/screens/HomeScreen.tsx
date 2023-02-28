import { useFonts } from "expo-font";
import { Icon } from "@rneui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import InventoryScreen from "@src/screens/InventoryScreen";
import ProductsScreen from "@src/screens/ProductsScreen";
import VinScreen from "@src/screens/VinScreen";
import NewsScreen from "@src/screens/NewsScreen";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Light": require("../../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("../../assets/fonts/OpenSans-Medium.ttf"),
  });

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#1EB3AE",
        tabBarInactiveTintColor: "#7a7876",
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: "none",
          fontFamily: "OpenSans-Medium",
        },
        tabBarContentContainerStyle: {
          paddingBottom: 8,
          marginTop: 8,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#1EB3AE",
        },
      }}
    >
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon type="font-awesome" name="car" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Accesories"
        component={ProductsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon type="feather" name="shopping-bag" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Vin"
        component={VinScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon type="feather" name="file-text" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon type="feather" name="globe" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
