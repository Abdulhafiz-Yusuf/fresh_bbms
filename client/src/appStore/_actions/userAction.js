import { SET_DB_PROFILE, REMOVE_DB_PROFILE } from '../_actions/types';



export const set_db_profile = (profile) => {
    return {
        type: SET_DB_PROFILE,
        payload: profile
    }
}

export const remove_db_profile = () => {
    return {
        type: REMOVE_DB_PROFILE
    }
}

