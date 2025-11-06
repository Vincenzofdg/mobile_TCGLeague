import {useColorScheme, Platform, ImageStyle} from 'react-native';
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
            tabBarShowLabel: false,
            tabBarStyle: {
                  backgroundColor: background.tabBar,
                  borderTopWidth: 0,
                  height: isIOS ? 70 : 55,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                  paddingTop: isIOS ? 3 : 0,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
            },
            tabBarLabelStyle: {
                  fontSize: 10,
                  marginTop: 12,
                  fontWeight: '500',
                  color: text.tabBar,
            },
      };
};

const tabIcon: ImageStyle = {
      width: 30,
      height: 30,
      marginTop: Platform.OS === 'ios' ? 60 : 25,
      marginBottom: Platform.OS === 'ios' ? 55 : 10,
      resizeMode: 'contain',
      tintColor: '#ffffffff',
};

export {theme, stack, tabBar, tabIcon};
