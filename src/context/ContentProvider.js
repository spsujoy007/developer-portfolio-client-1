import React, { useState } from 'react';
import { createContext } from 'react';
import addNotification from 'react-push-notification';
import { useNavigate } from 'react-router-dom';

export const ContentContext = createContext()
const ContentProvider = ({children}) => {
    // const navigate = useNavigate()

    // const [showNotify, setShowNotify] = useState(false)
    // const [blogData, setBlogData] = useState('')
    // if(showNotify){
    //     addNotification({
    //         title: `Sujoy Paul added a new blog`,
    //         message: blogData.title,
    //         duration: 10000,
    //         icon: 'https://i.ibb.co/XzT56Hg/sujoypaul-2.jpg',
    //         native: true,
    //         onClick: () => navigate('/')
    //     })
    // }

    const contextInfo ={
        adminName: 'Sujoy Paul'
        // setBlogData,
        // setShowNotify
    }
    return (
        <ContentContext.Provider value={contextInfo}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentProvider;