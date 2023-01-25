import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

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

GoogleSignin.configure({
  webClientId:
    "27550352723-99o15re9mgko4mt8i4j8eq7094hd6901.apps.googleusercontent.com",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});


export default function LoginScreen() {
  console.log()
  // const navigation = useNavigation<LoginStackNavigationProp>();

  // const handleGoogleAuth = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { idToken } = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     return auth().signInWithCredential(googleCredential);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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
          <Button mt="2" colorScheme="indigo">
            Ingresar
          </Button>
          {/* <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
          /> */}
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
