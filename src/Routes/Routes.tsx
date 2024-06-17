import React, { FunctionComponent } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';
import { ErrorBoundaries } from '../components/ErrorBoundaries';
import { App } from '../pages/Home';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[];
}

// Router configuration
const routerConfig: RouteConfig[] = [
    {
        path: '/',
        element: (
            <App />
        ),
    },
    {
        path: '*',
        element: (
            <div>Page not found</div>
        ),
    },
    {
        path: 'auth',
        element: (
            <ErrorBoundaries>
                <Outlet /> 
            </ErrorBoundaries>
        ),
        children: [
            {
                path: 'login',
                element: (
                    <Login />
                ),
            },
            {
                path: 'register',
                element: (
                    <Register />
                ),
            },
        ],
    },
];

const router = createBrowserRouter(routerConfig);

const Routers: FunctionComponent = () => (
    <RouterProvider router={router} />
);

export default Routers;
