import * as ACTION_TYPES from '../_actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case ACTION_TYPES.USER_PROFILE_TO_DB:
            return { ...state, register: action.payload }
        default:
            return state;
    }
}