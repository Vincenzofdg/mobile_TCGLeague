import React from 'react';
import {Text} from 'react-native';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';
import {PictureButton} from 'buttons';

function ProfileScreen({
      navigation,
}: ScreenProps['Profile']): React.ReactElement {
      return (
            <SafeArea>
                  <Text>PROFILE</Text>
                  <PictureButton />
            </SafeArea>
      );
}

export default ProfileScreen;
