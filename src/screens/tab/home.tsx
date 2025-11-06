import React from 'react';
import {Text} from 'react-native';
import {ScreenProps} from 'types';
import { SafeArea } from 'inheritances';
import {SubmitButton} from 'buttons';

function HomeScreen({navigation}: ScreenProps['Home']): React.ReactElement {
      return (
            <SafeArea>
                  <Text>HOME PAGE</Text>
                  <SubmitButton />
            </SafeArea>
      );
}

export default HomeScreen;
