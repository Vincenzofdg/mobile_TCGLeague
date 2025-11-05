import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackList} from 'types';
import TabRoute from './tabNavigation';
import {theme, stack} from 'styles';

const Stack = createNativeStackNavigator<RootStackList>();

function Routes(): React.JSX.Element {
      const opt = stack();
      const {barStyle, theme: mainTheme} = theme();
      const initialStack = 'HomeTab' as keyof RootStackList;

      return (
            <NavigationContainer theme={mainTheme}>
                  <StatusBar barStyle={barStyle} />
                  <Stack.Navigator
                        initialRouteName={initialStack}
                        screenOptions={opt}>
                        <Stack.Screen
                              name={initialStack}
                              component={TabRoute}
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

export default Routes;
