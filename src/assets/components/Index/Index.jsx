import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_SIGN_ON } from '../AppRoutes'
import {Button} from "@heroui/button";

const Index = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Index</h1>
            <title>Index</title>
            <Button color="primary" onPress={() => navigate(ROUTE_SIGN_ON)}>Sign On</Button>
        </div>
    );
};

export default Index;