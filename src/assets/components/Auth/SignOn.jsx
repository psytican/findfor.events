import React from 'react';
import {ROUTE_INDEX} from "../AppRoutes";
import {useNavigate} from "react-router-dom";

const SignOn = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>SignOn</h1>
            <title>Sign On</title>
            <div onClick={() => navigate(ROUTE_INDEX)}>Home</div>
        </div>
    );
};

export default SignOn;