import { useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";
import { getBranchList } from "./services/branch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteBranch as deleteBranchApi } from "./services/branch";

function Admin() {
  const [branchs, setBranchs] = useState([]);
  const navigate = useNavigate();

  const Add = () => {
    navigate("/add");
  };

  useEffect(() => {
    // get the list of products from server
    loadBranch();
  }, []);

  const loadBranch = async () => {
    debugger;
    const response = await getBranchList();
    debugger;
    if (response !== null) {
      setBranchs(response);
    } else {
      toast.error("Error while calling get /product api");
    }
  };

  const deleteBranch = async (branchId) => {
    const response = await deleteBranchApi(branchId);
    if (response !== null) {
      toast.success("branch deleted successfully");
      //navigate(`/emplist/${sessionStorage.getItem("branchId")}`)
      loadBranch(sessionStorage.getItem("branchId"));
    } else {
      toast.error("error while deleting branch");
    }
  };

  const goToEmpList = (branchId) => {
    // sessionStorage["branchId"] = branchId;
    sessionStorage.setItem("branchId", branchId);

    navigate(`/emplist/${branchId}`);
  };

  return (
    <>
      <div className="length">
        <div>
          <table className="table table-bordered">
            <thead>
              <tr className="colr">
                <td>Branch Id</td>
                <td>Branch Name</td>
                <td>Branch Location</td>
                <td>Branch code</td>
                <td>Branch Manager</td>
              </tr>
            </thead>

            <tbody>
              {branchs.map((branch) => {
                return (
                  <tr key={branch.branchId}>
                    <td>{branch.branchId}</td>
                    <td>{branch.branchCode}</td>
                    <td>{branch.branchName}</td>
                    <td>{branch.branchLocation}</td>
                    <td>{branch.branchManager}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate(`/edit/${branch.branchId}`);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button class="btn btn-danger" onClick={() => {
                          deleteBranch(branch.branchId);
                        }}>Delete</button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          goToEmpList(branch.branchId);
                        }}
                        className="btn btn-success"
                      >
                        Employee List
                      </button>
                    </td>
                  </tr>
                );
              })}
              ;
            </tbody>
          </table>
          <center>
            <button onClick={Add} className="btn btn-primary">
              Add Branch
            </button>
          </center>
        </div>
      </div>
    </>
  );
}
export default Admin;
