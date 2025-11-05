import {Platform} from 'react-native';

const shadow = {
      shadowColor: '#000000',
      shadowOffset: {
            width: 3,
            height: 6,
      },
      shadowOpacity: Platform.OS === 'ios' ? 0.3 : 10,
      shadowRadius: Platform.OS === 'ios' ? 5 : 0,
      elevation: 8,
};

export {shadow};
