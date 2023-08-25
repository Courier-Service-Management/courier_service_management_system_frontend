import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";

import image from "./images/bann5.jpg";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser as loginUserApi } from "./services/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // get the navigation object
  const navigate = useNavigate();

  // get dispatcher object

  const SignIn = async () => {
    debugger;
    if (email.length == "") {
      toast.error("Please enter email");
    } else if (password.length == "") {
      toast.error("Please enter password");
    } else {
      // call register api
      const response = await loginUserApi(email, password);
    debugger;
      // parse the response
      if (response !== null) {
        // parse the response's data and extract the token

        // store the token for making other apis
        //const [firstName, setFirstName] = response;
        
        sessionStorage["firstName"] = response.firstName;
        sessionStorage["mobile"] = response.mobile;

        // update global store's authSlice with status = true
       if(response.role==="Admin"){
        toast.success(`Welcome ${sessionStorage.getItem("firstName")} to store application`);

        // go back to login
        navigate("/admin");
       }

       else if(response.role==="Deliveryboy"){
          toast.success(`Welcome ${sessionStorage.getItem("firstName")} to store application`);
  
          // go back to login
          navigate("/deliveryboy");
         }
       }
       else {
        toast.error("Invalid user name or password");
      }
    }
  };

  return (
    <>
      <div className="length">
        <div style={{ backgroundImage: `url(${image})` }}>
          <div>
            <div>
              <center>
                <table className="len">
                  <tr>
                    <td className="col">
                      <h3> User Name</h3>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter username"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="col">
                      <h3> Password</h3>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter password"
                        name="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  {/* // <tr>
                //     <td className="col">
                //         <h3>Role</h3>
                //     </td>
                //     <td>
                //     <select name="role" onChange={OnTextChange}>
                //                 <option value="Select">Select Role</option>
                //                 <option value={credentials.Customers}>Customers</option>
                //                 <option value={credentials.Admin}>Admin</option>
                //                 <option value={credentials.Deliveryboy}>Deliveryboy</option>
                //             </select>
                //     </td>
               
                // </tr> */}
                  <tr>
                    <td colSpan={"2"}>
                      <button onClick={SignIn} className="btn btn-primary">
                        LogIn
                      </button>
                    </td>
                  </tr>
                </table>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
