import type {ComponentType} from 'react';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootTabList = {
      Home: undefined;
      Map: undefined;
      Match: undefined;
      Profile: undefined;
};

export type RootStackList = {
      HomeTab: undefined;
      Login: undefined;
      LocalMatch: undefined;
};

export type RootStackTabList = {};

export type StackScreenComponent<T extends keyof RootStackList> = ComponentType<
      NativeStackScreenProps<RootStackList, T>
>;

export type TabScreenComponent<T extends keyof RootTabList> = ComponentType<
      BottomTabScreenProps<RootTabList, T>
>;

export type RootList = RootStackList & RootTabList & RootStackTabList;
