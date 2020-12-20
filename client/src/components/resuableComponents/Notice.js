import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { clearError } from '../../appStore/_actions/userAction'
function Notice(props) {
    const error = useSelector(state => state.Error);
    const dispatch = useDispatch();

    function handleClearError() {
        dispatch(clearError())
    }

    return (
        <div className="error-notice">
            <span>{error}</span>
            <button onClick={handleClearError}>X</button>
        </div>
    )
}

export default Notice
