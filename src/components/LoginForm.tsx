import { StyleSheet, View } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useState } from "react";

export default function LoginForm() {
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
    <View style={styles.containerStyle}>
      <Input placeholder="Correo electrónico" style={styles.inputLoginStyle} />
      <Input
        placeholder="Contraseña"
        style={styles.inputLoginStyle}
        secureTextEntry={secureText}
        rightIcon={{
          type: "font-awesome",
          name: secureTextIcon,
          size: 20,
          color: "#c5c5c5",
          onPress: handleSecureText,
        }}
      />
      <Button
        title="Iniciar sesión"
        buttonStyle={{
          backgroundColor:"#1EB3AE",
          borderRadius: 10,
          width: 330,
          height: 55,
          padding: 10,
          marginBottom: 5,
        }}
        titleStyle={{
          fontSize: 15,
          fontWeight: "bold",
          color: "#F4F7FB"
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: 330
  },
  inputLoginStyle: {
    fontSize: 14,
  },
});
