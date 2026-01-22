import {url} from '../api';
import {token as target} from '../endpoint';
import {ICategory} from 'interfaces';

import {categoryMinimal} from './formaters';

export const generateToken = async (): Promise<void> => {
    const endpoint = target.login;

    try {
        const {
            data: {value},
        } = await url.post(endpoint);

        return value.map((item: any) => categoryMinimal(item));
    } catch (error) {
        console.error(error);
      //   return [] as ICategory[];
    }
};
