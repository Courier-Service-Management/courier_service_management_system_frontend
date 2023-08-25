import { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { editCustomerDetails } from "./services/user";
import { Link, useNavigate } from "react-router-dom";

import { updateCustomer as updateCustomerApi } from "./services/user";
import { log } from "./utils/utils";

// import image from './images/im.avif';

function Profile() {
  const navigate = useNavigate();

  const { customerId } = useParams();

  const [profile, setProfile] = useState({
    customerId: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
  });

  const getProfileDetailsToEdit = async (customerId) => {
    debugger;
    const response = await editCustomerDetails(customerId);
    debugger;
    if (response !== null) {
      setProfile(response);
    } else {
      toast.error("something went wrong ");
    }
  };

  useEffect(() => {
    getProfileDetailsToEdit(customerId);
    debugger;
  }, []);

  const updateProfile = async () => {
    debugger;

    if (profile.firstName.length == "") {
      toast.error("Please enter first name");
    } else if (profile.lastName.length == "") {
      toast.error("Please enter last name");
    } else if (profile.email.length == "") {
      toast.error("Please enter email");
    } else if (profile.password.length == "") {
      toast.error("Please enter password ");
    } else {
      const response = await updateCustomerApi(
        profile.customerId,
        profile.firstName,
        profile.lastName,
        profile.email,
        profile.password,
        profile.mobile,
        profile.gender
      );
      debugger;
      if (response) {
        debugger;
        toast.success("Successfully profile update");
        log(response.data);
        // go back to login
        navigate("/customer");
      } else {
        toast.error("Error while updating profile a  user, please try again");
      }
    }
  };

  return (
    <>
      <center>
        {/* <div style={{backgroundImage:`url(${image})`}} >  */}
        <div className="length">
          <div className="myTable">
            <div className="form-group">
              <table>
                <tr aria-colspan={2}>
                <td className="fa">Enter CustomerId</td>
                  <td>
                    <input
                      type="number"
                      required
                      className="form-control"
                      value={profile.customerId}
                      disabled
                      placeholder="Enter CustomerId"
                      onChange={(e) => {
                        setProfile({ ...profile, customerId: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr className="tr"></tr>
                <tr>
                  
                  <td className="fa">Enter firstname</td>
                  <td>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={profile.firstName}
                      placeholder="Enter Firstname"
                      onChange={(e) => {
                        setProfile({ ...profile, firstName: e.target.value });
                      }}
                    />
                  </td>
                  <td className="td"></td>

                  <td className="fa">Enter lastname </td>
                  <td>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={profile.lastName}
                      placeholder="Enter Lastname"
                      onChange={(e) => {
                        setProfile({ ...profile, lastName: e.target.value });
                      }}
                    />
                  </td>
                </tr>

                <tr className="tr"></tr>

                <tr>
                  <td className="fa">Enter Email</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={profile.email}
                      placeholder="Enter Email"
                      onChange={(e) => {
                        setProfile({ ...profile, email: e.target.value });
                      }}
                    />
                  </td>
                  <td className="td"></td>
                  <td className="fa">Enter Mobile</td>

                  <td>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={profile.mobile}
                      placeholder="Enter Mobile number"
                      onChange={(e) => {
                        setProfile({ ...profile, mobile: e.target.value });
                      }}
                    />
                  </td>
                </tr>

                <tr className="tr"></tr>

                <tr>
                  <td className="fa">Enter Password</td>
                  <td>
                    <input
                      type="password"
                      required
                      className="form-control"
                      value={profile.password}
                      placeholder="Enter password"
                      onChange={(e) => {
                        setProfile({ ...profile, password: e.target.value });
                      }}
                    />
                  </td>
                  <td className="td"></td>
                  <td className="fa">Enter Gender</td>
                  <td>
                    <select
                      name="role"
                      onChange={(e) => {
                        setProfile({ ...profile, gender: e.target.value });
                      }}
                    >
                      <option value="Select">Select Role</option>
                      <option value={profile.gender}>Male</option>
                      <option value={profile.gender}>Female</option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
            <tr className="tr"></tr>

            <hr></hr>

            <button className="btn btn-primary" onClick={updateProfile} >Update Record</button>
          </div>
        </div>
      </center>
    </>
  );
}

export default Profile;
