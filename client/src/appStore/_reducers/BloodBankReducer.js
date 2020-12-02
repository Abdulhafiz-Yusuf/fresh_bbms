import {
    FETCH_BLOOD
} from '../_actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_BLOOD:
            return { ...state, fetchedData: action.payload }
        default:
            return state;
    }
}