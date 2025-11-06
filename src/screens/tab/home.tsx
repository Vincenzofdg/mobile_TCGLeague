import React from 'react';
import {Text} from 'react-native';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';

function HomeScreen({navigation}: ScreenProps['Home']): React.ReactElement {
      return (
            <SafeArea>
                  <Text>HOME PAGE</Text>
            </SafeArea>
      );
}

export default HomeScreen;
