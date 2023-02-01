import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useState } from "react";

export default function RegisterForm() {
  const [secureText, setSecureText] = useState(true);
  const [secureTextIcon, setSecureTextIcon] = useState("eye-slash");

  const handleSecureText = () => {
    if (secureText) {
      setSecureText(false);
      setSecureTextIcon("eye");
    } else {
      setSecureText(true);
      setSecureTextIcon("eye-slash");
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Correo electrónico"
        inputStyle={styles.loginInputStyle}
        inputContainerStyle={styles.loginInputContainerStyle}
        containerStyle={styles.loginContainerStyle}
        autoCapitalize="none"
      />
      <Input
        placeholder="Contraseña"
        inputStyle={styles.loginInputStyle}
        inputContainerStyle={styles.loginInputContainerStyle}
        containerStyle={styles.loginContainerStyle}
        secureTextEntry={secureText}
        autoCapitalize="none"
        rightIcon={{
          type: "font-awesome",
          name: secureTextIcon,
          size: 20,
          color: "#c5c5c5",
          onPress: handleSecureText,
        }}
      />
      <Input
        placeholder="Repetir contraseña"
        inputStyle={styles.loginInputStyle}
        inputContainerStyle={styles.loginInputContainerStyle}
        containerStyle={styles.loginContainerStyle}
        secureTextEntry={secureText}
        autoCapitalize="none"
        rightIcon={{
          type: "font-awesome",
          name: secureTextIcon,
          size: 20,
          color: "#c5c5c5",
          onPress: handleSecureText,
        }}
      />
      <Button
        title="Registrarme"
        buttonStyle={styles.loginButtonStyle}
        titleStyle={styles.loginButtonTitleStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 330,
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
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    height: 55,
    marginTop: 5,
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
