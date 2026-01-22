import React, { useState, useEffect } from 'react';
import {ScreenProps} from 'types';
import {SafeArea} from 'inheritances';
import {IMatchMode} from 'interfaces';
import {GameTypeFlatlist as Flatlist} from 'flatlists';     

function MatchScreen({navigation}: ScreenProps['Match']): React.ReactElement {
      const [matchConfig, setMatchConfig] = useState({} as IMatchMode);

      useEffect(() => {
            // console.log(matchConfig)
      }, [matchConfig])

      return (
            <SafeArea>
                  <Flatlist title='TCG Game:' setConfig={setMatchConfig} config={matchConfig.tcg} />
            </SafeArea>
      );
}

export default MatchScreen;
