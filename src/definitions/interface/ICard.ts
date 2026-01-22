import { ITcgConfig, IMatchMode } from 'interfaces';

export interface IMatchModeCard {
      payload: ITcgConfig;
      isSelected: boolean;
      setConfig: React.Dispatch<React.SetStateAction<IMatchMode>>;
}
