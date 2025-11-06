import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {theme, stack} from 'styles';
import {RootStackList, StackScreenComponent} from 'types';
import {stack as stackScreens} from 'screens';
import TabRoute from './tabNavigation';

const Stack = createNativeStackNavigator<RootStackList>();

function Routes(): React.JSX.Element {
      const initial: keyof RootStackList = 'HomeTab';
      const screens = Object.keys(stackScreens) as Array<
            keyof typeof stackScreens
      >;
      const opt = stack();
      const {barStyle, theme: mainTheme} = theme();

      return (
            <NavigationContainer theme={mainTheme}>
                  <StatusBar
                        barStyle={
                              barStyle === 'dark-content'
                                    ? 'light-content'
                                    : 'dark-content'
                        }
                  />
                  <Stack.Navigator
                        initialRouteName={initial}
                        screenOptions={opt}>
                        <Stack.Screen name="HomeTab" component={TabRoute} />
                        {screens.map(screen => {
                              const component = stackScreens[
                                    screen
                              ] as StackScreenComponent<typeof screen>;
                              return (
                                    <Stack.Screen
                                          key={screen}
                                          name={screen}
                                          component={component}
                                    />
                              );
                        })}
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

export default Routes;
