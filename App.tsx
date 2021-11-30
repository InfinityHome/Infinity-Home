import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLISHABLE_KEY } from '@env';
import "react-native-gesture-handler";

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  useEffect(() => {
    const fetchFont = async () =>
      await Font.loadAsync({
        "Radley-Italic": require("./assets/fonts/Radley-Italic.ttf"),
        "Radley-Regular": require("./assets/fonts/Radley-Regular.ttf"),
        "Quintessential-Regular": require("./assets/fonts/Quintessential-Regular.ttf"),
        "ArchivoNarrow-Regular": require("./assets/fonts/ArchivoNarrow-Regular.ttf"),
        "ShareTechMono-Regular": require("./assets/fonts/ShareTechMono-Regular.ttf"),
        "Electrolize-Regular": require("./assets/fonts/Electrolize-Regular.ttf"),
      });
    fetchFont().then(() => {
      setFontLoaded(true);
    });
  }, []);

  return (
    <>
      {fontLoaded ? (
        <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
          <Navigation />
        </StripeProvider>
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      )}
    </>
  );
};

export default App;
