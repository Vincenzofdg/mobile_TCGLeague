import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {IMatchModeFlatlist, IMatchModeCard} from 'interfaces';

function MatchModeFlatlist({ navigation }: IMatchModeFlatlist): React.ReactElement {
      const [payload, setPayload] = useState<IMatchModeCard[]>([])

      useEffect(() => {
            async function FetchInfo() {
                  const mockedData = [
                        {
                              id: 1,
                              name: 'Magic The Gathering',
                              url: 'url-to-image',
                        },
                        {
                              id: 2,
                              name: 'Pokemon',
                              url: 'url-to-image',
                        },
                        {
                              id: 3,
                              name: 'Yu-Gi-Oh!',
                              url: 'url-to-image',
                        }
                  ]

                  setPayload(mockedData)
            }

            FetchInfo()
      }, [])

    const handleItemRendering = useCallback(
        (component: IMatchModeCard) => (
            // <BranchCard content={component} navigation={navigation} />
                <Text>{component.name}</Text>
        ),
        [navigation],
    );

    const keyExtractor = useCallback(({id}: IMatchModeCard) => 'tcg-game-' + id, []);

    return (
            <FlatList
                  data={payload}
                  renderItem={({item}) => handleItemRendering(item)}
                  keyExtractor={keyExtractor}
                  scrollEventThrottle={16}
                  ItemSeparatorComponent={() => <View style={{height: 20}} />}
                  ListFooterComponent={<View style={{height: 20}} />}
            />
    );
}

export {MatchModeFlatlist};
