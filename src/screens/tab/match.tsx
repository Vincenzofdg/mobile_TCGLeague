import React from 'react';
import {Text} from 'react-native';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';

function MatchScreen({navigation}: ScreenProps['Match']): React.ReactElement {
      return (
            <SafeArea>
                  <Text>MATCH</Text>
            </SafeArea>
      );
}

export default MatchScreen;
