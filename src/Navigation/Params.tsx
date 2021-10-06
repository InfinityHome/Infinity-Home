import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type LoginParamList = {
    SignUp: undefined;
    Login: undefined;
    SignIn: undefined;
  };

export type LoginNavProps<T extends keyof LoginParamList> = {
    navigation: NativeStackNavigationProp<LoginParamList, T>;
}

export type BottomNavParamList = {
    Home: undefined;
    Orders: undefined;
    Account: undefined;
  };
