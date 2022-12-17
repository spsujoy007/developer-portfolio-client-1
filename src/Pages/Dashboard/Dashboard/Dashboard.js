import React from 'react';
import Typewriter from 'typewriter-effect';

const Dashboard = () => {
    return (
        <div className='py-48 '>
            <h2 className='text-error text-5xl text-center'>
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