import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenProps} from 'types';

function ProfileScreen({
      navigation,
}: ScreenProps['Profile']): React.ReactElement {
      return (
            <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
                  <Text>PROFILE</Text>
            </SafeAreaView>
      );
}

export default ProfileScreen;
