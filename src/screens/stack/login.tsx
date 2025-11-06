import React from 'react';
import {Text} from 'react-native';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';

function LoginScreen({navigation}: ScreenProps['Login']): React.ReactElement {
      return (
            <SafeArea>
                  <Text>LOGIN PAGE</Text>
            </SafeArea>
      );
}

export default LoginScreen;
