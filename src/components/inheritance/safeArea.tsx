import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IInheritance} from 'interfaces';

function SafeArea({children}: IInheritance): React.ReactElement {
      return (
            <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
                  {children}
            </SafeAreaView>
      );
}

export {SafeArea};
