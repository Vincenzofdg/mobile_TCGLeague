import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootList} from 'types';

export type ScreenProps = {
      // Stack
      Login: NativeStackScreenProps<RootList, 'Login'>;
      LocalMatch: NativeStackScreenProps<RootList, 'LocalMatch'>;
      // Tab
      Home: BottomTabScreenProps<RootList, 'Home'>;
      Map: BottomTabScreenProps<RootList, 'Map'>;
      Match: BottomTabScreenProps<RootList, 'Match'>;
      Profile: BottomTabScreenProps<RootList, 'Profile'>;
};
