import React from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';
import {IMatchModeCard} from 'interfaces';
import {colorScheme} from 'styles';

function TcgCard({payload, setConfig, isSelected}: IMatchModeCard): React.ReactElement {
      const css = colorScheme().card;

      const handleClick = () => setConfig(p => ({...p, tcg: payload}));
      
      return (
            <TouchableOpacity onPress={handleClick} style={styles.container}>
                  <ImageBackground source={{uri: payload.url}} style={styles.background} />
                  {isSelected && <View style={[styles.background, styles.overlay, {backgroundColor: css.selected}]} />}
            </TouchableOpacity>
      );
}


const styles = StyleSheet.create({
      container: {
            alignItems: 'center',
            borderRadius: 8,
            overflow: 'hidden',
            position: 'relative'
      },
      background: {
            width: 180,
            height: 120
      },
      overlay: {
            position: 'absolute',
            top: 0,
            left: 0, 
            opacity: 0.2
      }
});

export {TcgCard};
