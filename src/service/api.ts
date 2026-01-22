import axios, {AxiosInstance} from 'axios';
import {mainUrl} from './endpoint';

const headers = {
    'Content-Type': 'application/json',
};

const url: AxiosInstance = axios.create({
    baseURL: mainUrl.production,
    headers,
});


export {url};
