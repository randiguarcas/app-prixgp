import { Text, View, ActivityIndicator } from "react-native";
import { Card, CardProps } from "@rneui/themed";
import { Image } from "@rneui/themed";

export default function ItemCard({ item }: any) {
  return (
    <View
      style={{
        width: "50%",
      }}
    >
      <Card
        containerStyle={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0
        }}
      >
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="cover"
          source={{ uri: item.img }}
        />
        <View style={{
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5
        }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
            }}
          >
            {item.year} {item.brand} {item.model}
          </Text>
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
            <Text>Q {item.price}</Text>
            <Text>{item.transmition}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}
