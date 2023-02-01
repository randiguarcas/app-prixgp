import { Text, View, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";
import SocialForm from "../components/SocialForm";
import { Link } from "@react-navigation/native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm />
      <SocialForm />
      <Text style={styles.registerTextStyle}>
        No tienes una cuenta?{" "}
        <Link to="/signup" style={styles.registerLinkStyle}>
          Registrate aquí
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  socialButtonStyle: {
    backgroundColor: "#1EB3AE",
    borderRadius: 10,
    width: 330,
    height: 55,
    padding: 10,
    marginBottom: 5,
  },
  socialButtonTitleStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#F4F7FB",
    marginLeft: 10,
  },
  registerTextStyle: {
    marginTop: 14,
    fontSize: 12,
    justifyContent: "flex-end",
  },
  registerLinkStyle: {
    marginTop: 14,
    fontSize: 12,
    color: "#1EB3AE",
  },
});
