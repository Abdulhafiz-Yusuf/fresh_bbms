import axios from 'axios';
import { FETCH_BLOOD } from './types';
import { BLOODBANK_SERVER } from './Config';

export function fetchBlood() {
    const request = axios.get(`${BLOODBANK_SERVER}/`)
        .then(response => response.data);
    return {
        FETCH_BLOOD,
        payload: request
    }
}