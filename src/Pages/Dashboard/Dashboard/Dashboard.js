import React from 'react';
import Typewriter from 'typewriter-effect';

const Dashboard = () => {
    return (
        <div className=''>
            <h2 className='text-error text-5xl'>
            <Typewriter
  onInit={(typewriter) => {
      typewriter.typeString('Welcome to Admin Dashboard!')
      .callFunction(() => {
          console.log('String typed out!');
        })
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</h2>
        </div>
    );
};

export default Dashboard;