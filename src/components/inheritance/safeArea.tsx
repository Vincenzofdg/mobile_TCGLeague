import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IInheritanceSafeArea} from 'interfaces';

function SafeArea({ children }: IInheritanceSafeArea): React.ReactElement {
      const edges = ['top', 'left', 'right'] as const;
      
      return (
            <SafeAreaView style={styles.container} edges={edges}>
                  {children}
            </SafeAreaView>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1
      }
})

export {SafeArea};
