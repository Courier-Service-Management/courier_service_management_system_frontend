import { useParams } from "react-router-dom";
import image from "./images/im8.jpg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { editbranchDetails } from "./services/branch";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";

import { updateBranch as updateBranchApi } from "./services/branch";
import { log } from "./utils/utils";

function Edit() {
  const navigate = useNavigate();

  const { branchId } = useParams();

  const [branch, setBranch] = useState({
    branchId: "",
    branchName: "",
    branchCode: "",
    branchLocation: "",
    branchManager: "",
  });

  const getBranchDetailsToEdit = async (branchId) => {
    const response = await editbranchDetails(branchId);
    debugger;
    if (response !== null) {
      setBranch(response);
    } else {
      toast.error("branch not found");
    }
  };

  useEffect(() => {
    getBranchDetailsToEdit(branchId);
    debugger;
  }, []);

  const updateBranch = async () => {
    debugger;

    if (branch.branchName.length == "") {
      toast.error("Please enter branch name");
    } else if (branch.branchCode.length == "") {
      toast.error("Please enter branch code");
    } else if (branch.branchLocation.length == "") {
      toast.error("Please enter branch location");
    } else if (branch.branchManager.length == "") {
      toast.error("Please enter branch manager");
    } else {
      const response = await updateBranchApi(
        branch.branchId,
        branch.branchName,
        branch.branchLocation,
        branch.branchCode,
        branch.branchManager
      );
      debugger;
      if (response) {
        debugger;
        toast.success("Successfully profile update");
        log(response.data);
        // go back to login
        navigate("/admin");
      } else {
        toast.error("Error while registering a  user, please try again");
      }
    }
  };
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div className="lengths">
        <div></div>
        <center>
          <table className="b">
            <tr>
              <td>Enter Branch Id</td>
              <td className="td"></td>
              <td>
                <input
                  type="number"
                  placeholder="Branch Name"
                  value={branch.branchId}
                  disabled
                  onChange={(e) => {
                    setBranch({ ...branch, branchId: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr className="tr"></tr>
            <tr>
              <td>Enter Branch Name</td>
              <td className="td"></td>
              <td>
                <input
                  type="text"
                  placeholder="Branch Name"
                  value={branch.branchName}
                  onChange={(e) => {
                    setBranch({ ...branch, branchName: e.target.value });
                  }}
                />
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
                  value={branch.branchLocation}
                  onChange={(e) => {
                    setBranch({ ...branch, branchLocation: e.target.value });
                  }}
                />
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
                  value={branch.branchCode}
                  onChange={(e) => {
                    setBranch({ ...branch, branchCode: e.target.value });
                  }}
                />
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
                  value={branch.branchManager}
                  onChange={(e) => {
                    setBranch({ ...branch, branchManager: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr className="tr"></tr>
            <tr>
              <center>
                <td>
                  <button className="btn btn-primary" onClick={updateBranch}>
                    Update Branch
                  </button>
                </td>
              </center>
            </tr>
          </table>
        </center>
      </div>
    </div>
  );
}
export default Edit;
