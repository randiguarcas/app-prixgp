import { useFonts } from "expo-font";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Input, ListItem, Avatar } from "@rneui/themed";

import products from "../data/products";

export default function ProductsScreen() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Light": require("../../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("../../assets/fonts/OpenSans-Medium.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input
          placeholder="Baterias, aceites, llantas"
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
          data={products}
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
                  {item.brand}, {item.name}, {item.saeViscosity}
                </ListItem.Title>
                <ListItem.Subtitle
                  style={{
                    fontFamily: "OpenSans-Light",
                  }}
                >
                  {item.category}
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
