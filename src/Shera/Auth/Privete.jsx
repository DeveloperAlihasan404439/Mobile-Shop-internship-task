import useAuth from './useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const Privete = ({children}) => {
    const {user,loading} = useAuth()
    const lacation = useLocation()
    if(user){
        return children
    }
    if(loading){
        return <h1>loding start</h1>
    }
    return <Navigate state={lacation.pathname} to='/login'/>;
};

export default Privete;