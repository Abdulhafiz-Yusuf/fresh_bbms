import axios from 'axios';
import * as ACTION_TYPES from './types';
import { USER_SERVER } from '../components/Config.js';

export function userprofiletodb(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/userprofiletodb`, dataToSubmit)
        .then(response => response.data);

    return {
        type: ACTION_TYPES.USER_PROFILE_TO_DB,
        payload: request
    }
}


