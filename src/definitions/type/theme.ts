import {StatusBarStyle} from 'react-native';
import {Theme} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export type StackOpt = NativeStackNavigationOptions;
export type TabOpt = BottomTabNavigationOptions;

export type PhoneThemes = 'light' | 'dark';

export type MainTheme = {
      theme: Theme;
      barStyle: StatusBarStyle;
};
