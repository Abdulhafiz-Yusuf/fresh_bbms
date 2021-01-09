import * as ACTION_TYPES from '../_actions/types'

const initialState = {
    bgDetail: [],
    bcDetail: [],
    Error: "Error Availabe",

}

export default function BloodBankReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.FETCH_BLOOD_GROUP:
            return { ...state, bg: action.payload }
        case ACTION_TYPES.FETCH_BLOOD_GROUP_BY_ID:
            return { ...state, bcDetail: action.payload.bc, bgDetail: action.payload.bg }
        default:
            return state;
    }
}