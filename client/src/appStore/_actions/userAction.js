import axios from 'axios';
import * as ACTION_TYPES from './types';
import { USER_SERVER } from '../../config.json';



//=========================
//  User actions
//=========================

export function checkifUserExist(user) {
    const request = axios.get(`${USER_SERVER}/checkIfUserExistInDB`, user)
        .then(response => {
            if (response.data.userExist)
                return {
                    type: ACTION_TYPES.USER_EXIST,
                    payload: { userExist: response.data.userExist, user: response.data.user }
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

export function fullUserInfoFromDb(user) {
    return {
        type: ACTION_TYPES.GET_USER_FULL_INFO,
        payload: user
    }
}
export function completeRegistration(dataToSubmit) {
    //Collect complete user info from 'complete registration page' then post to db and return full user info
    const request = axios.post('http://localhost:9000/user/regCompletion', dataToSubmit)
        .then(response => {
            return ({
                type: ACTION_TYPES.GET_USER_FULL_INFO,
                payload: { user: response.data.user, success: response.data.success }
            })
        })
        .catch(err => {
            return {
                type: ACTION_TYPES.ERROR_CATCH,
                payload: err.message
            }
        })
    return request
}

export function clearError() {
    return ({
        type: ACTION_TYPES.CLEAR_ERROR,
        payload: undefined
    })
}
export function viewPageAction(page) {
    return ({
        type: ACTION_TYPES.VIEWPAGE,
        payload: page
    })
}
