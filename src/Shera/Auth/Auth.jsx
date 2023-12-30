import React, { useContext } from 'react';
import { authContext } from './AuthProvider';

const Auth = () => {
    
    const authContext = useContext(authContext)
    return authContext;
};

export default Auth;