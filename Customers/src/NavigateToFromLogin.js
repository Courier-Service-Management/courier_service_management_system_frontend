import { Navigate, useNavigate } from "react-router-dom";

function Auth(props)
{
    
    const navigate = useNavigate()
    const SignOut=(setUserName)=>{
        sessionStorage.removeItem("firstName");
        setUserName("User")
        navigate('/');

    }

    const SignIn=()=>{
    
        
        navigate('/');
    }
    return {SignIn,SignOut}
    
}
export default Auth;