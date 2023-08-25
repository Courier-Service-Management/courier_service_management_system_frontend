import image from './images/im8.jpg';
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { editEmpDetails } from "./services/user";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";

import { updateEmp as updateEmpApi } from "./services/user";
import { log } from "./utils/utils";
function EditEmp()
{
    const navigate = useNavigate();

    const { empId } = useParams();
  
    const [emp, setEmp] = useState({
      empId: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      mobile:"",
      password:"",
      role:"",
      branchId:""
    });
  
    const getEmpDetailsToEdit = async (empId) => {
        debugger;
      const response = await editEmpDetails(empId);
      debugger;
      if (response !== null) {
        setEmp(response);
      } else {
        toast.error("branch not found");
      }
    };
  
    useEffect(() => {
      getEmpDetailsToEdit(empId);
      debugger;
    }, []);
  
    const updateEmp = async () => {
      debugger;
  
      if (emp.firstName.length == "") {
        toast.error("Please enter branch name");
      } else if (emp.lastName.length == "") {
        toast.error("Please enter branch code");
      } else if (emp.password.length == "") {
        toast.error("Please enter branch location");
      } else if (emp.mobile.length == "") {
        toast.error("Please enter branch manager");
      } else {
        const response = await updateEmpApi(
            emp.empId,           
            emp.firstName,
            emp.lastName,
            emp.email,
            emp.gender,
            emp.mobile,
            emp.password,
            emp.role,
            emp.branchId
           
         
        );
        debugger;
        if (response) {
          debugger;
          toast.success("Successfully profile update");
          log(response.data);
          // go back to login
          navigate(`/emplist/${emp.branchId}`);
        } else {
          toast.error("Error while registering a  user, please try again");
        }
      }
    };
    return(
        <div style={{backgroundImage:`url(${image})`}} >
        <div className="lengths">
      <div>

      </div>
      <center>
      <table className='b'>
                  <tr>
                      <td>
                          Enter Emp Id
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="number" placeholder='Employee Name' value={emp.empId}  onChange={(e) => {
                    setEmp({ ...emp, empId: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter firstName
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="text" placeholder='firstName ' value={emp.firstName}  onChange={(e) => {
                    setEmp({ ...emp, firstName: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter lastName
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="text" placeholder='lastName' value={emp.lastName}  onChange={(e) => {
                    setEmp({ ...emp, lastName: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter Email
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="text" placeholder='Email' value={emp.email} onChange={(e) => {
                    setEmp({ ...emp, email: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter gender
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="text" placeholder='gender' value={emp.gender} onChange={(e) => {
                    setEmp({ ...emp, gender: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter Mobile
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="text" placeholder='Mobile' value={emp.mobile} onChange={(e) => {
                    setEmp({ ...emp, mobile: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter Password
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="password" placeholder='Password' value={emp.password} onChange={(e) => {
                    setEmp({ ...emp, branch: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter Role
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="text" placeholder='Role' value={emp.role} onChange={(e) => {
                    setEmp({ ...emp, role: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                  <tr>
                      <td>
                          Enter branchId
                      </td>
                      <td className='td'></td>
                      <td>
                         <input type="number" placeholder='branchId' value={emp.branchId} onChange={(e) => {
                    setEmp({ ...emp, branchId: e.target.value });
                  }}/>
                      </td>
                  </tr><tr className='tr'>

                  </tr>
                 
                  <tr>
                      <center>
                          <td>
                              <button className='btn btn-primary' onClick={updateEmp}>update Emp</button>
                          </td>
                      </center>
                  </tr>
                  
              </table>
              </center>
    </div>
  </div>
    )
}
export default EditEmp;