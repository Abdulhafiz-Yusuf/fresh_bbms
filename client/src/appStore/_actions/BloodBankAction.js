import axios from 'axios';
import * as ACTION_TYPES from './types';
import { BLOODCENTER_SERVER } from '../../config.json';

export function fetchBlood() {
    const request = axios.get(`${BLOODCENTER_SERVER}/`)
        .then(response => {
            if (response.data)
                return {
                    type: ACTION_TYPES.FETCH_BLOOD_GROUP,
                    payload: response.data
                }
        })
        .catch(err => {
            return {
                type: ACTION_TYPES.ERROR_CATCH,
                payload: err.response.data.Error
            }
        })
    return request
}


export async function fetchBloodbyId(bgId) {
    const request = await axios.get(`${BLOODCENTER_SERVER}/blood_by_id?id=${bgId}`)
        .then(response => {
            if (response.data)
                return {
                    type: ACTION_TYPES.FETCH_BLOOD_GROUP_BY_ID,
                    payload: response.data
                }
        })
        .catch(err => {
            return {
                type: ACTION_TYPES.ERROR_CATCH,
                payload: err.response.data.Error
            }
        })
    return request
}