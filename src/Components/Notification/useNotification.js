import React, { useEffect } from 'react';
import addNotification from 'react-push-notification';

export const useNotification = () => {
            useEffect(
                addNotification({
                    title: "Visit my facebook profile",
                    message: "you can see my updated in my facebook profile. Thank you",
                    duration: "7000",
                    icon: 'https://pbs.twimg.com/profile_images/1516418981393055753/6b0MATkQ_400x400.jpg',
                    native: true,
                    onClick: () => {window.location = 'https://www.facebook.com/spsujoy07'}
                })
            )
};
