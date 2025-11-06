import React from 'react';
import {Text} from 'react-native';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';

function MapScreen({navigation}: ScreenProps['Map']): React.ReactElement {
      return (
            <SafeArea>
                  <Text>MAP</Text>
            </SafeArea>
      );
}

export default MapScreen;
