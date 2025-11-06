import {NavigationProp} from '@react-navigation/native';
import { RootList } from 'types';

interface IFlatlist {
      navigation: NavigationProp<RootList>;
}

export interface IMatchModeFlatlist extends IFlatlist { }