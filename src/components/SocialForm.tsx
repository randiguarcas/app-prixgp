import { Text, View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { Link } from "@react-navigation/native";

// type LoginStackNavigatorParamList = {
//   signup: undefined;
// };

// type LoginStackNavigationProp = NativeStackNavigationProp<
//   LoginStackNavigatorParamList,
//   "signup"
// >;

export default function SocialForm() {
  GoogleSignin.configure({
    webClientId:
      "27550352723-99o15re9mgko4mt8i4j8eq7094hd6901.apps.googleusercontent.com",
  });

  // const navigation = useNavigation<LoginStackNavigationProp>();

  const handleGoogleAuth = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFacebookAuth = async () => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);

      if (result.isCancelled) {
        throw "User cancelled the login process";
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw "Something went wrong obtaining access token";
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Button
        title="Continuar con Google"
        icon={{
          name: "google",
          type: "font-awesome",
          size: 25,
          color: "white",
        }}
        buttonStyle={styles.socialButtonStyle}
        titleStyle={styles.socialButtonTitleStyle}
        onPress={handleGoogleAuth}
      />
      <Button
        title="Continuar con Facebook"
        icon={{
          name: "facebook",
          type: "font-awesome",
          size: 25,
          color: "white",
        }}
        buttonStyle={styles.socialButtonStyle}
        titleStyle={styles.socialButtonTitleStyle}
        onPress={handleFacebookAuth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
