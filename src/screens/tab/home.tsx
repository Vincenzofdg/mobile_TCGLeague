import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenProps} from 'types';

function HomeScreen({navigation}: ScreenProps['Home']): React.ReactElement {
      return (
            <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
                  <Text>HOME PAGE</Text>
            </SafeAreaView>
      );
}

export default HomeScreen;
