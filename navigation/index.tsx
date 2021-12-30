/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ServicesScreen from '../screens/ServicesScreen';
import TravelListDetailScreen from '../screens/ListDetailScreen';
import { RootStackParamList} from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={TravelListDetailScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

