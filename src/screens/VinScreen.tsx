import { useFonts } from "expo-font";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Input, ListItem, Avatar } from "@rneui/themed";

import cars from "../data/cars";
import { Button } from "@rneui/base";

export default function VinScreen() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Light": require("../../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("../../assets/fonts/OpenSans-Medium.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input
          placeholder="Ej: 4Y1SL65848Z411439"
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInputStyle}
          inputContainerStyle={styles.searchInputContainerStyle}
        />
        <Button
        title="Verificar VIN"
        buttonStyle={styles.loginButtonStyle}
        titleStyle={styles.loginButtonTitleStyle}
      />
      </View>
      <View style={styles.inventoryContainer}>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    fontFamily: "OpenSans-Medium",
  },
  inventoryContainer: {
    flex: 1,
    marginTop: 20,
  },
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    height: 50,
  },
  searchInputStyle: {
    fontSize: 14,
  },
  searchInputContainerStyle: {
    borderBottomWidth: 0,
  },
  loginButtonStyle: {
    backgroundColor: "#1EB3AE",
    borderRadius: 10,
    height: 55,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  loginButtonTitleStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#F4F7FB",
  },
});
