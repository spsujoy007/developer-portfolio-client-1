import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminProtect = ({children}) => {
    // const navigate = useNavigate()
    // // const permituser = window.prompt('Enter admin username')
    // // const permitpass = window.prompt('Enter admin password')
    // const userName = process.env.ADMIN_USERNAME;
    // const userPass = process.env.ADMIN_PASS;
    // // if(permituser === userName && permitpass === userPass){
    // //     // navigate('/')
    // //     // toast.error('Wrong user')
    // //     console.log('successs')
    // // }
    return {children}
};

export default AdminProtect;