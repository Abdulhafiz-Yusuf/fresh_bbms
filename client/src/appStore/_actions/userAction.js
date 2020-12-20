import axios from 'axios';
import * as ACTION_TYPES from './types';
import { USER_SERVER } from '../../config.json';



//=========================
//  User actions
//=========================

export function checkifUserExist(user) {
    const request = axios.get(`${USER_SERVER}/checkIfUserExistInDB`, user)
        .then(response => {
            return {
                type: ACTION_TYPES.CHECK_USER_EXIST,
                payload: response
            }
        })
        .catch(err => {
            return {
                type: ACTION_TYPES.ERROR_CATCH,
                payload: err.message
            }
        })
    return request
}

export function getUserFullInfo(user) {
    const request = axios.get(`${USER_SERVER}/getuserFullInfo`, user)
        .then(response => response);
    return {
        type: ACTION_TYPES.GET_USER_FULL_INFO,
        payload: request
    }
}
export function completeRegistration(dataToSubmit) {
    //Collection complete user info from complete registration page and post to db
    const request = axios.post(`${USER_SERVER}/regCompletion`, dataToSubmit)
        .then(response => response);
    return {
        type: ACTION_TYPES.GET_USER_FULL_INFO,
        payload: request

    }
}

export function clearError() {
    return ({
        type: ACTION_TYPES.CLEAR_ERROR,
        payload: undefined
    })
}
