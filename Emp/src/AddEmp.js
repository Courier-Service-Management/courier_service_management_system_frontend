import image from "./images/im5.jpeg";
import image1 from "./images/im6.jpg";
import { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { toast } from "react-toastify";
import { addEmp as addEmpApi } from "./services/user";
import { log } from "./utils/utils";
import axios from "axios";
function AddEmp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [branchId, setBranchId] = useState("");

  const navigate = useNavigate();

  const addEmp = async () => {
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
    
    
    } else {
      const response = await addEmpApi(
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
        navigate(`/emplist/${sessionStorage.getItem("branchId")}`);
      } else {
        toast.error("Error while registering a new user, please try again");
      }
    }
  };
  return (
    <div className="length">
      <div className="container">
        <div className="flex">
          <div className="of">
            <img src={image1} alt="" />
          </div>
          <div className="sp"></div>
          <div>
            <table className="colr">
              <tr>
                <td>Enter firstName</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="enter first Name"
                    name="firstName"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter lastName</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="enter lastName"
                    name="lastName"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter Email</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="enter email "
                    name="emil"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter password</td>
                <td className="td"></td>
                <td>
                  <input
                    type="password"
                    placeholder="enter password"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter Mobile</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="enter mobile"
                    name="mobile"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter branchId</td>
                <td className="td"></td>
                <td>
                  <input
                    type="number"
                    placeholder="enter branchId"
                    name="branchId"
                    onChange={(e) => {
                      setBranchId(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>
                  <select
                    name="role"
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  >
                    <option value="Select">Select Role</option>
                    <option value="Deliveryboy">Deliveryboy</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>
                  <select
                    name="role"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="Select">Select Role</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <center>
                  <td>
                    <button className="btn btn-primary" onClick={addEmp}>Add Employee</button>
                  </td>
                </center>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddEmp;
