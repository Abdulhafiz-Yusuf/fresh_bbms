import * as ACTION_TYPES from '../_actions/types'


export default function BloodBankReducer(state = {}, action) {
    switch (action.type) {
        case ACTION_TYPES.FETCH_BLOOD_CENTER:
            return { ...state, fetchedData: action.payload }
        default:
            return state;
    }
}