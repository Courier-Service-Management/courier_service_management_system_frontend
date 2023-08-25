import { Link,Switch, Route } from "react-router-dom";
import Login from "./Login";
import Customer from "./Customer";

function ProtectedRoute(props)
{
    if(sessionStorage.getItem("firstName")!==null)
    {
        return <Route path="/admin" element={<Admin/>} />
    }
    else
    {
        return <Login setfirstName={props.setfirstName}/>
    }
}
export default ProtectedRoute;