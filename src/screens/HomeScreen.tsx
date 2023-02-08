import { View, StyleSheet, StatusBar, Text } from "react-native";
import ItemCard from "../components/ItemCard";
import cars from "../components/inventory";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedScreen from "./FeedScreen";
import AccesoriesScreen from "./AccesoriesScreen";
const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#1EB3AE",
        tabBarInactiveTintColor: "#C7C7C7",
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: "none",
          borderColor: "yellow",
          textDecorationColor: "yellow",
          borderBottomColor: "yellow",
        },
        tabBarItemStyle: { borderBottomColor: "yellow" },
        tabBarContentContainerStyle: {
          borderBottomColor: "yellow",
          borderColor: "yellow",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#1EB3AE",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: "Predio virtual" }}
      />
      <Tab.Screen
        name="Accesories"
        component={AccesoriesScreen}
        options={{ tabBarLabel: "Accesorios" }}
      />
    </Tab.Navigator>
    // return (
    //   <View>
    //     <StatusBar backgroundColor="#1EB3AE" />
    //     <Text style={{
    //       padding: 5,
    //       fontSize: 14,
    //       fontWeight: '800',
    //     }}>Agregados recientemente</Text>
    //     <View style={styles.container}>
    //       {cars.map((car) => {
    //         return <ItemCard key={car.id} item={car}></ItemCard>;
    //       })}
    //     </View>
    //   </View>
    // );
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     backgroundColor: "white",
//   },
// });
