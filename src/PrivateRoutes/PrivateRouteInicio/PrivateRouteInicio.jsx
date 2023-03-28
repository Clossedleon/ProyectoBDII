import { Navigate } from "react-router";
import { LOGIN_URL } from "../../constants/urls";
import { useUser } from "../../context/UserContext";


export function PrivateRouteInicio({children}) {
    const {user, isLoading} = useUser();

    if(isLoading){
        <h1>Loading User...</h1>
    }

    if(!isLoading && !user){
        return <Navigate to={LOGIN_URL}/>
    }

    return children;
}

