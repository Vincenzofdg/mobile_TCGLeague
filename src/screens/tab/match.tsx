import React, { useState, useEffect } from 'react';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';
import {IMatchModeCard} from 'interfaces';
import {GameTypeFlatlist as Flatlist} from 'flatlists';     

function MatchScreen({navigation}: ScreenProps['Match']): React.ReactElement {
      const [matchConfig, setMatchConfig] = useState({} as IMatchModeCard);

      useEffect(() => {
            console.log(matchConfig)
      }, [matchConfig])

      return (
            <SafeArea>
                  <Flatlist title='TCG Game:' config={setMatchConfig} />
            </SafeArea>
      );
}

export default MatchScreen;
