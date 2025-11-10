import React from 'react';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabList, TabScreenComponent} from 'types';
import {tab as tabScreens} from 'screens';
import {tabBar, tabIcon, colorScheme} from 'styles';
import {tabBarIcons} from 'global';

const Tab = createBottomTabNavigator<RootTabList>();

function Routes(): React.JSX.Element {
      const initial: keyof RootTabList = 'Home';
      const screens = Object.keys(tabScreens) as Array<keyof RootTabList>;
      const opt = tabBar();
      const colors = colorScheme();

      const iconRender = (screen: keyof RootTabList, focused: boolean) => {
            return (
                  <Image
                        source={tabBarIcons[screen]}
                        style={[
                              tabIcon,
                              focused && {tintColor: colors.tabBar.focused},
                        ]}
                  />
            );
      };

      return (
            <SafeAreaView style={{flex: 1}} edges={['bottom']}>
                  <Tab.Navigator initialRouteName={initial} screenOptions={opt}>
                        {screens.map(screen => {
                              const component = tabScreens[
                                    screen
                              ] as TabScreenComponent<typeof screen>;

                              return (
                                    <Tab.Screen
                                          key={screen}
                                          name={screen}
                                          component={component}
                                          options={{
                                                tabBarIcon: ({focused}) =>
                                                      iconRender(
                                                            screen,
                                                            focused,
                                                      ),
                                          }}
                                    />
                              );
                        })}
                  </Tab.Navigator>
            </SafeAreaView>
      );
}

export default Routes;
