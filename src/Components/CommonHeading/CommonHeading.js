import React from 'react';

const CommonHeading = ({children}) => {
    return (
        <div>
            <h1 className='text-4xl text-center text-white font-semibold uppercase py-6'>{children}</h1>
        </div>
    );
};

export default CommonHeading;