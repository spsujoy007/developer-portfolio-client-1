import React, { useState } from 'react';
import ClockTime from '../../../Components/ClockTime/ClockTime';
// import Notification from '../../../Components/Notification/Notification';

const AutoMessage = () => {
    // const [mmessage, setMmessage] = useState()
    const mymessage = "Did you know? You are so cute! 🥰"

    // var myArray = [{name: 'object1'}, {name: 'object2'}, {name: 'object3'}];
    // var repeat = 5;
    // var count = 0;
    
    // while (count < repeat) {
        // for (var i = 0; i < mymessage.length; i++) {
        //     (function(i) {
        //         setTimeout(function() {
        //             setMmessage(mymessage[i].message);
        //         }, i * 3000);
        //     })(i);
        // }
    //     count++;
    // }



    return (
        <div className='p-2 bg-[#35c3e30f] rounded-r-xl border-l-4 border-sky-500 mb-5 md:mb-0'>
            <h2 className='text-sky-500'>{mymessage}</h2>
            {/* <ClockTime></ClockTime> */}
        </div>
    );
};

export default AutoMessage;