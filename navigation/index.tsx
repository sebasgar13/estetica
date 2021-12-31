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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen';
import { AbousUs } from '../screens/AbousUs';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}
const Tab = createBottomTabNavigator();

function BottomTabNavigator(){
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: '#9c5ce0',
                tabBarInactiveTintColor: '#d2e2f2'
            }}
            initialRouteName='StackProducs'
        >
            <Tab.Screen name="StackProducs" component={StackProductsNavigator}/>
            <Tab.Screen name="StackServices" component={StackServicesNavigator}/>
            <Tab.Screen name="InfLocaScreen" component={AbousUs}/>
            <Tab.Screen name="AboutUsScreen" component={AbousUs}/>
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackProductsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={TravelListDetailScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}

function StackServicesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={TravelListDetailScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}
