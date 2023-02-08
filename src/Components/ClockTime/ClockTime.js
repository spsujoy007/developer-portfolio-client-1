import React, { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';

const ClockTime = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    return (
        <h2 className='text-white text-xs flex items-center gap-x-1'><FaRegClock></FaRegClock> <span>{time}</span></h2>
    );
};

export default ClockTime;