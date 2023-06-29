// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { toast } from 'react-hot-toast';
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
    else{
        return navigate('/')
    }
};

export default AdminProtect;