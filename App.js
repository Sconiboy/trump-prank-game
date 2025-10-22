import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import CardScreen from './screens/CardScreen';
import RevealScreen from './screens/RevealScreen';
import FinalScreen from './screens/FinalScreen';
import { initSounds } from './utils/sounds';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initSounds();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#1a1a1a' },
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="Reveal" component={RevealScreen} />
        <Stack.Screen name="Final" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
