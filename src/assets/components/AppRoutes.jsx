import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from "./Index/Index";
import RouteNotFound from "./Error/RouteNotFound";
import SignIn from "./Auth/SignIn";
import SignOn from "./Auth/SignOn";
import SignOut from "./Auth/SignOut";

export const ROUTE_INDEX = '/';
export const ROUTE_SIGN_ON = '/sign-on';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTE_INDEX} element={<Index />} />
            <Route path={ROUTE_SIGN_ON} element={<SignOn/>} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="*" element={<RouteNotFound />} />
        </Routes>
    );
};

export default AppRoutes;