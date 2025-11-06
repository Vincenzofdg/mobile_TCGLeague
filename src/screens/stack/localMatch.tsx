import React from 'react';
import {Text} from 'react-native';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';

function LocalMatchScreen({
      navigation,
}: ScreenProps['LocalMatch']): React.ReactElement {
      return (
            <SafeArea>
                  <Text>MATCH PAGE</Text>
            </SafeArea>
      );
}

export default LocalMatchScreen;
