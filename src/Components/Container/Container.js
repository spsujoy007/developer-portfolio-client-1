import React from 'react';

const Container = ({children}) => {
    return (
        <div className='md:max-w-[1240px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;