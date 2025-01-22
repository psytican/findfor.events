import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./AppRoutes";
import {HeroUIProvider} from "@heroui/react";

const App = () => {
    return (
        <HeroUIProvider>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </HeroUIProvider>
    );
};

export default App;