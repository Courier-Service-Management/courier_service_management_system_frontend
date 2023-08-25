import { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./common.css";
import { toast } from "react-toastify";
import { addComplain, addComplain as addComplainApi } from "./services/orders";
import { log } from "./utils/utils";
import axios from "axios";
import image from "./images/im4.jpg";
import image1 from "./images/im4.jpeg";
import image2 from "./images/im3.jpeg";
function Complain() {
  const {orderId}=useParams();

  
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  
  const navigate = useNavigate();
  const addComplain = async () => {
    debugger;
 const response = await addComplainApi(
       orderId,
       issue,
       description
       
      );
debugger;
      if (response.status === true) {
        toast.success("Successfully complain register");
        log(response.data);
        // go back to login
        navigate("/orderlist/" + sessionStorage.getItem("customerId"));
      } else {
        toast.error("Error while registering a Complain");
      }
    }
  

  return (<>
      <div className="length">
        <div className="container">
          <div className="flex">
            <div className="im">
              <table>
                <tr>
                
                </tr>
                <tr className="tr"></tr>
                <tr>
                  <td>
                   
                  </td>
                </tr>
                <tr className="tr"></tr>

                <tr>
                  <img src={image} alt="" />
                </tr>
              </table>
            </div>

            <div className="img">
              <center>
                {" "}
                <h1 className="fa">Mention Your Complain Here!</h1>
                <table>
                  <tr>
                    <td  >Enter OrderId</td>
                    <td className="td"></td>
                    <td>
                      <input
                        type="number"
                        name="orderId"
                        placeholder="OrderId"
                        required
                        disabled
                        value={orderId}
                       
                      />
                    </td>
                  </tr>
                  <tr ></tr>
                  <tr className="tr"></tr>
                  <tr>
                    <td  >Select Issues </td>
                    <td className="td"></td>
                    <td>
                      <select
                         onChange={(e) => {
                            setIssue(e.target.value);
                          }}
                      >
                        <option> Select Issue</option>
                        <option>productDamage</option>
                        <option>deliveredLate</option>
                        
                      </select>
                    </td>
                  </tr>
                  <tr className="tr"></tr>
                  <tr>
                  <td  >Enter Description</td>
                    <td className="td"></td>
                    <td>

                        <textarea   onChange={(e) => {
                      setDescription(e.target.value);
                    }}>

                        </textarea>
                     
                    </td>
                  </tr>
                  <tr className="tr"></tr>

                 
                 
                  <tr>
                    <td>
                        <center>
                        <button class="btn btn-success" 
                          onClick={addComplain}
                        >Submit</button>
                      </center>
                    </td>
                  </tr>
                </table>
              </center>
            </div>

            <div className="imag">
             
                

              <table>
                <tr className="tr"></tr>
                <tr className="image">
                  <img src={image1} alt="" />
                </tr>
                <tr className="tr"></tr>
                <tr className="image">
                  <img src={image2} alt="" />
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Complain;
