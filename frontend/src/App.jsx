import React from 'react'

import { Dashboard } from './pages/Dashboard'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: < Register/>,

    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

const App = () => { return <>  <RouterProvider router={router} />  </> }

export default App