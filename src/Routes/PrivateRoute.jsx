import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../pages/Home/Home/Spinner';


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner></Spinner>
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login"></Navigate>
};

export default PrivateRoute;