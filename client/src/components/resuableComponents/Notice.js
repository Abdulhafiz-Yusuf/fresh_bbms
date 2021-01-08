import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { clearError } from '../../appStore/_actions/userAction'
function Notice(props) {
    const stateError = useSelector(state => state.UserReducer.Error);
    const dispatch = useDispatch();

    function handleClearError() {
        dispatch(clearError())
    }
    return (
        <div className="">
            <span>{stateError}</span>
            <button onClick={handleClearError}>X</button>
        </div>
    )
}

export default Notice
