import { Text, View, StyleSheet } from "react-native";
import RegisterForm from "../components/RegisterForm";
import SocialForm from "../components/SocialForm";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <RegisterForm />
      <SocialForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
