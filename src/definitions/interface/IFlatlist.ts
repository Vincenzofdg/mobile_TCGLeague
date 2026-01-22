import {NavigationProp} from '@react-navigation/native';
import {RootList} from 'types';
import {ITcgConfig, IMatchMode} from 'interfaces';

interface IFlatlist {
      navigation: NavigationProp<RootList>;
}

export interface IGameTypeFlatlist {
      title: string;
      config: ITcgConfig;
      setConfig: React.Dispatch<React.SetStateAction<IMatchMode>>;
}
