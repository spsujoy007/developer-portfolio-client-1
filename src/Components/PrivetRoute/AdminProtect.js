import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminProtect = ({children}) => {
    const navigate = useNavigate()
    
    // const [time, setTime] = useState(new Date());
    // const security = prompt("Enter Password")
    // const getT = time.toString().split(' ')[4].split(':')
    const getGrandP = localStorage.getItem('getPass')

    if(getGrandP){
        return children
    }
    // else if(security === getT + 110){
    //     localStorage.setItem('getPass', {security: security, 'grandPass:': 110})
    //     return children
    // }
    else{
        return navigate('/')
    }

    // return (
    //     <div></div>
    // )
};

export default AdminProtect;