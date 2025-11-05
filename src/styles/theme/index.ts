import {useColorScheme, Platform} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';
import {PhoneThemes, MainTheme, StackOpt, TabOpt} from 'types';

import Themes from './modes';

const checkPhoneThemeMode = (): PhoneThemes => {
      const colorScheme = useColorScheme();
      const phoneTheme = colorScheme === 'dark' ? 'dark' : 'light';

      return phoneTheme;
};

const theme = (): MainTheme => {
      const phoneTheme = checkPhoneThemeMode();
      const {theme: mainTheme} = Themes[phoneTheme];

      return {
            theme: {
                  ...DefaultTheme,
                  dark: phoneTheme === 'dark',
                  colors: {...mainTheme},
            },
            barStyle: `${phoneTheme}-content`,
      };
};
const stack = (): StackOpt => {
      return {
            headerShown: false,
      };
};

const tabBar = (): TabOpt => {
      const isIOS = Platform.OS === 'ios';
      const phoneTheme = checkPhoneThemeMode();
      const {background, text} = Themes[phoneTheme];

      return {
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: {
                  backgroundColor: background.tabBar,
                  borderTopWidth: 0,
                  height: isIOS ? 70 : 65,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                  paddingTop: isIOS ? 3 : 0,
            },
            tabBarLabelStyle: {
                  fontSize: 10,
                  marginTop: 12,
                  fontWeight: '500',
                  color: text.tabBar,
            },
      };
};

export {theme, stack, tabBar};
