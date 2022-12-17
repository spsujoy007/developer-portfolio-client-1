import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh]'>
            <progress className="progress w-full progress-success"></progress>
        </div>
    );
};

export default Loader;