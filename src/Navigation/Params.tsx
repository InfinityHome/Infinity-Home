import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoginParamList = {
  SignUp: undefined;
  Login: undefined;
  SignIn: undefined;
};

export type AccountParamList = {
  AccountScreen: undefined;
  AccountDetails: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  Questions: { title: string };
  Stripe: {
    title: string;
    data: {
      question: string;
      answer: string;
    }[];
  };
};

export type LoginNavProps<T extends keyof LoginParamList> = {
  navigation: NativeStackNavigationProp<LoginParamList, T>;
};

export type AccountNavProps<T extends keyof AccountParamList> = {
  navigation: NativeStackNavigationProp<AccountParamList, T>;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: NativeStackNavigationProp<HomeParamList, T>;
  route?: RouteProp<{ params: HomeParamList['Stripe'] }, 'params'>;
};

export type BottomNavParamList = {
  Home: undefined;
  Orders: undefined;
  Account: undefined;
};
