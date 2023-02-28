import { useFonts } from "expo-font";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Input, ListItem, Avatar } from "@rneui/themed";

import cars from "../data/cars";

export default function InventoryScreen() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Light": require("../../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("../../assets/fonts/OpenSans-Medium.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input
          placeholder="¿Qué quieres encontrar?"
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInputStyle}
          inputContainerStyle={styles.searchInputContainerStyle}
          rightIcon={{
            type: "font-awesome",
            name: "search",
            size: 20,
            color: "#c5c5c5",
          }}
        />
      </View>
      <View style={styles.inventoryContainer}>
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ListItem
              key={item.id}
              bottomDivider
              containerStyle={{
                padding: 10,
              }}
            >
              <Avatar
                size={80}
                source={{
                  uri: item.img,
                }}
                containerStyle={{
                  backgroundColor: "white",
                  elevation: 5,
                }}
              />
              <ListItem.Content
                style={{
                  marginTop: -20,
                }}
              >
                <ListItem.Title
                  style={{
                    fontFamily: "OpenSans-Medium",
                    fontWeight: "bold",
                  }}
                >
                  {item.year} {item.brand} {item.model}
                </ListItem.Title>
                <ListItem.Subtitle
                  style={{
                    fontFamily: "OpenSans-Light",
                  }}
                >
                  {item.transmition}
                </ListItem.Subtitle>
                <ListItem.Subtitle
                  style={{
                    color: "#1EB3AE",
                    fontFamily: "OpenSans-Medium",
                    fontWeight: "bold",
                  }}
                >
                  Q {item.price}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
        ></FlatList>
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
});
