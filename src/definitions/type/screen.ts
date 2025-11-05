import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootList} from 'types';

export type ScreenProps = {
      // Stack
      // Tab
      Home: BottomTabScreenProps<RootList, 'Home'>;
      Profile: BottomTabScreenProps<RootList, 'Profile'>;
};
