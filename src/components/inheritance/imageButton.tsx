import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {IInheritanceButton} from 'interfaces';
import {colorScheme} from 'styles';
import {common} from 'global';

function ImageButton({
      children,
      enabled = false,
      style = {},
      action,
}: IInheritanceButton): React.ReactElement {
      const colors = colorScheme();
      const borderColor = colors.borderBackground.image;
      const tintColor = colors.tintColor.button;

      const handleSubmit = (): void => action();

      return (
            <View style={styles.container}>
                  <TouchableOpacity
                        style={[
                              styles.btn,
                              {borderColor},
                              ...(Array.isArray(style) ? style : [style]),
                        ]}
                        onPress={handleSubmit}
                        disabled={!enabled}>
                        {children}
                  </TouchableOpacity>
                  <Image
                        style={[styles.image, {tintColor}]}
                        source={common.camera}
                  />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            width: 120,
            alignSelf: 'center',
      },
      btn: {
            overflow: 'hidden',
            borderRadius: 100,
            borderWidth: 3,
      },
      image: {
            position: 'absolute',
            width: 32,
            height: 32,
            bottom: 0,
            right: 0,
      },
});

export {ImageButton};
