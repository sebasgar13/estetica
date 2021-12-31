/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  ServicesScreen: undefined;
  ProductsScreen: undefined;
  Detail: {
    item: Item
  },
  Modal: undefined;
  NotFound: undefined;
};


export interface Item {
  key: string,
  service: string,
  image:string,
  price: number,
  color: string,
  categorias: string,
  description: string,
}

