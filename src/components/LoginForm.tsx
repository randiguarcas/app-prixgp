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
    <View style={{ width: 330 }}>
      <Input placeholder="Correo electrónico" style={styles.inputLoginStyle} />
      <Input
        placeholder="Contraseña"
        style={styles.inputLoginStyle}
        secureTextEntry={secureText}
        rightIcon={{
          type: "font-awesome",
          name: secureTextIcon,
          size: 18,
          color: "#c5c5c5",
          onPress: handleSecureText,
        }}
      />
      <Button
        title="Continuar con email"
        buttonStyle={{
          borderColor: "white",
          borderRadius: 30,
          width: 330,
          height: 55,
          padding: 10,
          marginBottom: 5,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputLoginStyle: {
    fontSize: 14,
  },
});
