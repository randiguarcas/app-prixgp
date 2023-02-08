import { Text, View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Correo electrónico registrado"
        inputStyle={styles.loginInputStyle}
        inputContainerStyle={styles.loginInputContainerStyle}
        containerStyle={styles.loginContainerStyle}
        autoCapitalize="none"
      />
      <Button
        title="Recuperar contraseña"
        buttonStyle={styles.loginButtonStyle}
        titleStyle={styles.loginButtonTitleStyle}
      />
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
  loginInputStyle: {
    fontSize: 15,
    marginTop: 0,
  },
  loginInputContainerStyle: {
    borderBottomWidth: 0,
    paddingTop: 4,
    marginTop: 0,
  },
  loginContainerStyle: {
    borderRadius: 10,
    borderStyle: "solid",
    borderTopColor: "#1EB3AE",
    borderBottomColor: "#1EB3AE",
    borderLeftColor: "#1EB3AE",
    borderRightColor: "#1EB3AE",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 55,
    marginTop: 5,
    width: 330,
  },
  loginButtonStyle: {
    backgroundColor: "#1EB3AE",
    borderRadius: 10,
    width: 330,
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
  recoveryLinkStyle: {
    textAlign: "right",
    padding: 5,
    fontSize: 12,
    color: "#1EB3AE",
  },
});
