import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'inheritances';

function SubmitButton(): React.ReactElement {
      const handlePress = (): void => {
            return;
      };

      return (
            <Button
                  style={styles.container}
                  action={handlePress}
                  enabled={true}>
                  <Text style={styles.text}>Me fale uma verdade</Text>
            </Button>
      );
}

const styles = StyleSheet.create({
      container: {},
      text: {
            color: '#fff',
            fontWeight: '500',
            fontSize: 17,
      },
});

export {SubmitButton};
