import React from 'react';

const ProjectDetails = ({children}) => {
    console.log(children);
    return (
        <div>
            <h2 className='text-5xl text-white py-20'>Code running</h2>
        </div>
    );
};

export default ProjectDetails;