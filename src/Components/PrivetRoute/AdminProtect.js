// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminProtect = ({children}) => {
    const navigate = useNavigate()

    const getGrandP = JSON.parse(localStorage.getItem('getPass'));

    let time = new Date()
    const day = time.getDate();
    const hours = time.getHours()-12;
    const minutes = time.getMinutes();
    const wordp=day + '-' + Math.abs(hours);
    console.log(wordp);

    if(getGrandP){
        if(getGrandP){
            return children
        }
        else{
            return navigate('/')
        }
    }
    else{

        return navigate('/')
    }
};

export default AdminProtect;