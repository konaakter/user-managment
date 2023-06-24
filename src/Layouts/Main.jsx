import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Share/Navber';
import Fotter from '../Share/Fotter';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;