import { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { toast } from "react-toastify";
import { signUp as signUpApi } from "./services/user";
import { log } from "./utils/utils";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [branchId, setBranchId] = useState("");

  const navigate = useNavigate();

  const signUp = async () => {
    debugger;

    if (firstName.length == "") {
      toast.error("Please enter first name");
    } else if (lastName.length == "") {
      toast.error("Please enter last name");
    } else if (email.length == "") {
      toast.error("Please enter email");
    } else if (mobile.length == "") {
      toast.error("Please enter mobile");
    } else if (password.length == "") {
      toast.error("Please enter password");
    } else if (confirmPassword.length == "") {
      toast.error("Please confirm password");
    } else if (password !== confirmPassword) {
      toast.error("Password does not match");
    } else {
      const response = await signUpApi(
        firstName,
        lastName,
        email,
        password,
        mobile,
        gender,
        branchId,
        role
      );

     
      if (response.status === true) {
        toast.success("Successfully registered a new user");
        log(response.data);
        // go back to login
        navigate("/");
      } else {
        toast.error("Error while registering a new user, please try again");
      }
    }
  };
     
  

  return (
    <center>
      <div className="length">
        <div className="myTable">
          <div className="form-group">
            <table>
              <tr>
                <td className="fc">Enter firstName</td>
                <td>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="firstName"
                    placeholder="Enter Firstname"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </td>
                <td className="td"></td>

                <td className="fc">Enter lastName </td>
                <td>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="lastName"
                    placeholder="Enter Lastname"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr className="tr"></tr>

              <tr>
                <td className="fc">Enter Email</td>
                <td>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </td>
                <td className="td"></td>
                <td className="fc">Enter Mobile</td>

                <td>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="mobile"
                    placeholder="Enter Mobile number"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr className="tr"></tr>

              <tr>
                <td className="fc">Enter Password</td>
                <td>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </td>
                <td className="td"></td>
                <td className="fc">Enter Gender</td>
                <td>
                  <select
                    name="role"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="Select">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
              </tr>
              <tr className="tr"></tr>

              <tr>
                <td className="fc">Enter BranchId</td>
                <td>
                  <input
                    type="number"
                    required
                    className="form-control"
                    name="branchId"
                    placeholder="Enter branchId"
                    onChange={(e) => {
                      setBranchId(e.target.value);
                    }}
                  />
                </td>

                <td className="td"></td>
                <td className="fc">Enter role</td>
                <td>
                  <select
                    name="role"
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  >
                    <option value="Select">Select Role</option>
                    <option value="Deliveryboy">Deliveryboy</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
          <tr className="tr"></tr>
          <tr>
            <td className="fc">confirmPassword</td>
            <td>
              <input
                type="password"
                required
                className="form-control"
                name="confirmpassword"
                placeholder="confirm password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </td>
          </tr>

          <hr></hr>

          <button className="btn btn-primary" onClick={signUp}>
            Add Record
          </button>
        </div>
      </div>
    </center>
  );
}

export default Signup;
