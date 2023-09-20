import React from 'react';
import { useLocation } from 'react-router-dom';

const CommonHeading = ({children}) => {
    const pathname = useLocation().pathname;
    return (
        <div>
            <h1 className={`text-4xl text-center text-${pathname === '/blog' ? '#2D493A': 'white'} font-semibold uppercase py-6`}>{children}</h1>
        </div>
    );
};

export default CommonHeading;