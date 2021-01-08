import * as ACTION_TYPES from '../_actions/types';

//=========================
//  User reducers
//=========================
const initialState = {
    UserExist: true,
    User: {},
    Error: "Error Availabe",
    ViewPage: 'profile'
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.USER_EXIST:
            return { ...state, userExist: action.payload.userExist, User: action.payload.user }
        case ACTION_TYPES.GET_USER_FULL_INFO:
            return { ...state, User: action.payload.user }
        // case ACTION_TYPES.USER_FROM_DB:
        //     return { ...state, User: action.payload.user, UserExist: action.payload.userExist }
        case ACTION_TYPES.ERROR_CATCH:
            return { ...state, User: action.payload, Error: action.payload.Error }
        case ACTION_TYPES.CLEAR_ERROR:
            return { ...state, Error: action.payload }
        case ACTION_TYPES.VIEWPAGE:
            return { ...state, ViewPage: action.payload }

        default:
            return state;
    }
}