import React from 'react'
import { Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../authSlice'

const PublicOnlyRoute = ({ component: Component }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    return isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
  };

export default PublicOnlyRoute