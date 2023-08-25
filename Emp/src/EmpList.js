import { useEffect, useInsertionEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getEmpList } from "./services/user";
import { deleteEmp as deleteEmpApi } from "./services/user";

import { toast } from "react-toastify";
import userEvent from "@testing-library/user-event";

function EmpList() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();
  const { branchId } = useParams();
  const AddEmp = () => {
    navigate("/addemp");
  };
  const EditEmp = () => {
    navigate("./EditEmp");
  };

  useEffect(() => {
    loadBranch(branchId);
  }, []);
  useEffect(() => {
    // get the list of products from server
    //
  }, [emps]);

  const loadBranch = async (branchId) => {
    const response = await getEmpList(branchId);
    debugger;
    if (response !== null) {
      setEmps(response);
    } else {
      toast.error("Error while calling get /product api");
    }
  };

  const deleteEmp = async (empId) => {
    const response = await deleteEmpApi(empId);
    if (response !== null) {
      toast.success("employee deleted successfully");
      //navigate(`/emplist/${sessionStorage.getItem("branchId")}`)
      loadBranch(sessionStorage.getItem("branchId"));
    } else {
      toast.error("error while deleting employee");
    }
  };

  return (
    <>
      <div className="length">
        <div>
          <table className="table table-bordered">
            <thead>
              <tr className="colr">
                <td>Emp Id</td>
                <td>Emp firstName</td>
                <td>Emp lastName</td>
                <td>Emp email</td>
                <td>Emp Password</td>
                <td>Emp role</td>
                <td>Emp mobile</td>
                <td>Emp gender</td>
              </tr>
            </thead>

            <tbody>
              {emps.map((emp) => {
                return (
                  <tr key={emp.empId}>
                    <td>{emp.empId}</td>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.email}</td>
                    <td>{emp.password}</td>
                    <td>{emp.role}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.gender}</td>

                    <td>
                      <button
                        onClick={() => {
                          navigate(`/editemp/${emp.empId}`);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          deleteEmp(emp.empId);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              ;
            </tbody>
          </table>
          <center>
            <button onClick={AddEmp} className="btn btn-primary">
              Add Emp
            </button>
          </center>
        </div>
      </div>
    </>
  );
}
export default EmpList;
