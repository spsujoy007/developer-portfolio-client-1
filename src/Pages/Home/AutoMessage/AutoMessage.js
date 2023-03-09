import React, { useState } from 'react';
import { useEffect } from 'react';
import ClockTime from '../../../Components/ClockTime/ClockTime';
// import Notification from '../../../Components/Notification/Notification';

const AutoMessage = () => {
    const [mymessage, setMymessage] = useState('')
    console.log('number: ', mymessage)

    const messages = [
        {
            id: 1,
            msg: "Did you know? How cute you are! 🥰"
        },
        {
            id: 2,
            msg: "You are only one & unic in the world!😎"
        },
        {
            id: 3,
            msg: "When 404! My heart is blocked 😂"
        }
    ]

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setMymessage(messages[i].msg);
          i++;
          if (i >= messages.length) {
            i = 0;
          }
        }, 5000);
        return () => clearInterval(intervalId);
      }, [messages.id]);


    return (
        <div className='p-2  bg-[#35c3e30f] rounded-r-xl border-l-4 border-sky-500 mb-5 md:mb-0'>
            {
                <h2 className='text-sky-500'>{mymessage}</h2>
            }
            {/* <ClockTime></ClockTime> */}
        </div>
    );
};

export default AutoMessage;