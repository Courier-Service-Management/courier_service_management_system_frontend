import image from "./images/im5.jpeg";
import image1 from "./images/im6.jpg";
import { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { toast } from "react-toastify";
import { addBranch as addBranchApi } from "./services/branch";
import { log } from "./utils/utils";
import axios from "axios";
function Add() {
  const [branchName, setBranchName] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [branchLocation, setBranchLocation] = useState("");
  const [branchManager, setBranchManager] = useState("");
  const navigate = useNavigate();

  const addBranch = async () => {
    debugger;

    if (branchName.length == "") {
      toast.error("Please enter branch name");
    } else if (branchCode.length == "") {
      toast.error("Please enter branch code");
    } else if (branchLocation.length == "") {
      toast.error("Please enter branch location");
    } else if (branchManager.length == "") {
      toast.error("Please enter branch manager ");
    } else {
      const response = await addBranchApi(
        branchName,
        branchCode,
        branchLocation,
        branchManager
      );

      if (response.status === true) {
        debugger;
        toast.success("Successfully registered a new user");
        log(response.data);
        // go back to login
        navigate("/admin");
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
                <td>Enter Branch Name</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="Branch Name"
                    value={branchName}
                    onChange={(e) => {
                      setBranchName(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter Branch Location</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="Branch Location"
                    value={branchCode}
                    onChange={(e) => {
                      setBranchCode(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter Branch Code</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="Branch Code"
                    value={branchLocation}
                    onChange={(e) => {
                      setBranchLocation(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <td>Enter Branch Manager</td>
                <td className="td"></td>
                <td>
                  <input
                    type="text"
                    placeholder="Branch Manager"
                    value={branchManager}
                    onChange={(e) => {
                      setBranchManager(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <center>
                  <td>
                    <button className="btn btn-primary" onClick={addBranch}>
                      Add Branch
                    </button>
                  </td>
                </center>
              </tr>
            </table>
          </div>
          <div className="lsd">
            <table>
              <tr>
                <h3 className="colr">
                  Creating anew branch means increases a delivery efficiency
                </h3>

                <tr className="tr"></tr>
                <p>
                  Our target is to get 50 branch completed in one year and make
                  our Customer happy by providing a good services to them good
                  services means delivered a product on time
                </p>
              </tr>
              <tr className="tr"></tr>
              <tr>
                <img src={image} alt="" />
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Add;
