import * as ACTION_TYPES from '../_actions/types';

//=========================
//  User reducers
//=========================
const initialState = {
    userExist: true,
    user: {},
    Error: undefined
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.USER_EXIST:
            return { ...state, userExist: action.payload.userExist, user: action.payload.user }
        case ACTION_TYPES.GET_USER_FULL_INFO:
            return { ...state, user: action.payload.user }
        // case ACTION_TYPES.USER_FROM_DB:
        //     return { ...state, user: action.payload.user, userExist: action.payload.userExist }
        case ACTION_TYPES.ERROR_CATCH:
            return { ...state, user: action.payload, Error: action.payload.Error }
        case ACTION_TYPES.CLEAR_ERROR:
            return { ...state, Error: action.payload }

        default:
            return state;
    }
}