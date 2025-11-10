import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {ImageButton} from 'inheritances';
import {user} from 'global';

function PictureButton(): React.ReactElement {
      const handlePress = (): void => {
            return;
      };

      return (
            <ImageButton
                  style={styles.container}
                  action={handlePress}
                  enabled={true}>
                  <Image style={styles.image} source={user.profile} />
            </ImageButton>
      );
}

const styles = StyleSheet.create({
      container: {},
      image: {
            width: 120,
            height: 120,
      },
});

export {PictureButton};
