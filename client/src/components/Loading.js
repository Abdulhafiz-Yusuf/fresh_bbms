import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
    <div className="spinner">
        <h2 className='text-danger text-center mb-3 font-weight-bold'>
            Loading User Data....</h2>
        <h3 className='text-danger text-center mb-3 font-weight-bold'>
            If this take too long please refresh the page</h3>
    </div>
);

export default Loading;