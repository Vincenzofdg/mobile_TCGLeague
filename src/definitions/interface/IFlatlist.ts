import {NavigationProp} from '@react-navigation/native';
import {RootList} from 'types';
import {IMatchModeCard} from './ICard';

interface IFlatlist {
      navigation: NavigationProp<RootList>;
}

export interface IGameTypeFlatlist {
      title: string;
      config: React.Dispatch<React.SetStateAction<IMatchModeCard>>;
}
