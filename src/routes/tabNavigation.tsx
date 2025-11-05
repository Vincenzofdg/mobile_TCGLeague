import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tab as tabScreens} from 'screens';
import {RootTabList} from 'types';
import {tabBar} from 'styles';

const Tab = createBottomTabNavigator<RootTabList>();

function Routes(): React.JSX.Element {
      const initialTab = 'Home' as keyof RootTabList;
      const opt = tabBar();

      return (
            <SafeAreaView style={{flex: 1}} edges={['bottom']}>
                  <Tab.Navigator
                        initialRouteName={initialTab}
                        screenOptions={opt}>
                        <Tab.Screen name="Home" component={tabScreens.Home} />
                        <Tab.Screen
                              name="Profile"
                              component={tabScreens.Profile}
                        />
                  </Tab.Navigator>
            </SafeAreaView>
      );
}

export default Routes;
