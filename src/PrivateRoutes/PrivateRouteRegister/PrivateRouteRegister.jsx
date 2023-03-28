import { Navigate } from 'react-router';
import { HOME_URL } from '../../constants/urls';
import { useUser } from '../../context/UserContext'

export function PrivateRouteRegister({children}) {
  const {user, isLoading} = useUser();
  
  if(isLoading){
    return <h1>LOADING USER...</h1>
  }

  if(!isLoading && user){
    return <Navigate to={HOME_URL}/>
  }

  return children;
}

