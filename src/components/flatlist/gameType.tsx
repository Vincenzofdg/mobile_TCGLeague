import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {IGameTypeFlatlist, IMatchModeCard} from 'interfaces';

function GameTypeFlatlist({title, config}: IGameTypeFlatlist): React.ReactElement {
      const [payload, setPayload] = useState<IMatchModeCard[]>([]);

      useEffect(() => {
            async function FetchInfo() {
                  const mockedData = [
                        {
                              id: 1,
                              name: 'Magic The Gathering',
                              rawName: 'magic_the_gathering',
                              url: 'https://media.wizards.com/2017/images/daily/41mztsnrdm.jpg',
                        },
                        {
                              id: 2,
                              name: 'Pokemon',
                              rawName: 'pokemon',
                              url: 'https://moon-whale.com/cdn/shop/files/Pokemon-bannerv2-1200-480.png?v=1752573350&width=1200',
                        },
                        {
                              id: 3,
                              name: 'Yu-Gi-Oh!',
                              rawName: 'yu_gi_oh',
                              url: 'https://cdn11.bigcommerce.com/s-lccr685n9n/product_images/uploaded_images/yugioh-banner.jpg',
                        },
                  ];

                  setPayload(mockedData);
            }

            FetchInfo();
      }, []);

      const handleClick = (tcg: IMatchModeCard) => {
            config(p => ({...p, tcg}))
      }

      const handleItemRendering = useCallback(
            (component: IMatchModeCard) => (
                  // <BranchCard content={component} navigation={navigation} />
                  <TouchableOpacity onPress={() => handleClick(component)} style={{alignItems: 'center', borderRadius: 8, overflow: 'hidden'}}>
                        <ImageBackground source={{uri: component.url}} style={{width: 180, height: 120, }}></ImageBackground>
                  </TouchableOpacity>
            ),
            [],
      );

      const keyExtractor = useCallback(({id}: IMatchModeCard) => 'tcg-game-' + id, []);

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>{title}</Text>
                  <FlatList
                        data={payload}
                        renderItem={({item}) => handleItemRendering(item)}
                        keyExtractor={keyExtractor}
                        scrollEventThrottle={16}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{width: 10}} />}
                        ListHeaderComponent={() => <View style={{width: 30}} />}
                  />
            </View>
      );
}


const styles = StyleSheet.create({
      container: {
            paddingVertical: 10,
      },
      title: {
            color: '#ffffff',
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 10,
            marginLeft: 15,
      }
});

export {GameTypeFlatlist};
