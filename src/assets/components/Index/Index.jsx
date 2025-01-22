import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_SIGN_ON } from '../AppRoutes'
import {Button} from "@heroui/button";
import { HomeIcon } from '@heroicons/react/24/solid';

const Index = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Index</h1>
            <title>Index</title>
            <Button onPress={() => navigate(ROUTE_SIGN_ON)}>Sign On</Button>
            <HomeIcon className="h-6 w-6 text-white" />
        </div>
    );
};

export default Index;