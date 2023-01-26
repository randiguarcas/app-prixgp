import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  LoginManager,
  AccessToken,
  LoginButton,
} from "react-native-fbsdk-next";
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Link,
  Input,
  Button,
  HStack,
} from "native-base";

type LoginStackNavigatorParamList = {
  signup: undefined;
};

type LoginStackNavigationProp = NativeStackNavigationProp<
  LoginStackNavigatorParamList,
  "signup"
>;

export default function LoginScreen() {
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

  const onFacebookButtonPress = async () => {
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
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="400">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          PrixGP
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Únete nuestro ecosistema digital automotríz.
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo electrónico</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Recuperar contraseña
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="lightBlue">
            Iniciar sesión
          </Button>
          <GoogleSigninButton
            style={{ width: 338, height: 60, marginLeft: -5 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={handleGoogleAuth}
          />
          <LoginButton
            style={{ width: 333, height: 50 }}

            onLoginFinished={(error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log("logout.")}
          />
          {/* <Button onPress={onFacebookButtonPress}>Acceder con Facebook</Button> */}
          <HStack mt="6" justifyContent="center">
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Registrarse
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
