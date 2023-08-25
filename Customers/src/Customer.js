import { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { addOrders as addOrdersApi } from "./services/orders";
import { log } from "./utils/utils";
import axios from "axios";

import image from "./images/im4.jpg";
import image1 from "./images/im4.jpeg";
import image2 from "./images/im3.jpeg";

function Customer() {
  const [orderWeight, setOrderWeight] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [branchId, setbranchId] = useState("");
  const [trackingId, setTrackingId] = useState("");

  const navigate = useNavigate();

  const addOrders = async () => {
    const customerId = sessionStorage.getItem("customerId");

    if (orderWeight.length == "") {
      toast.error("Please enter order weight");
    } else if (fromAddress.length == "") {
      toast.error("Please enter fromAddres ");
    } else if (toAddress.length == "") {
      toast.error("Please enter toAddress");
    } else {
      const response = await addOrdersApi(
        orderWeight,
        fromAddress,
        toAddress,
        branchId,
        customerId
      );

      if (response.status === true) {
        toast.success("Successfully order place");
       
        log(response.data);
        // go back to login
        navigate("/customer");
      } else {
        toast.error("Error while placing order, please try again");
      }
    }
  };

  return (
    <>
      <div className="length">
        <div className="container">
          <div className="flex">
            <div className="im">
              <table>
                <tr>
                  <h1 className="colr"> Enter order id to track the order</h1>
                </tr>
                <tr className="tr"></tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Tracking Id"
                      onChange={(e) => {
                        setTrackingId(e.target.value);
                      }}
                    ></input>
                    <input
                      type="button"
                      className="btn btn-primary"
                      value="Track Order"
                      onClick={() => {
                        sessionStorage["trackingId"] = trackingId;
                        navigate("/track");
                      }}
                    ></input>
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
                <h1 className="fa">Place Order And Get Best Service</h1>
                <table>
                  <tr>
                    <td>Enter Weight</td>
                    <td className="td"></td>
                    <td>
                      <input
                        type="number"
                        name="name"
                        placeholder="Order Weight"
                        required=""
                        onChange={(e) => {
                          setOrderWeight(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr className="tr"></tr>

                  <tr>
                    <td>Enter From Address</td>
                    <td className="td"></td>
                    <td>
                      <select
                        onChange={(e) => {
                          setFromAddress(e.target.value);
                        }}
                      >
                        <option>Transport From</option>
                        <option>Pune</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>Hinjewadi</option>
                        <option>Karad</option>
                        <option>Sangli</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="tr"></tr>
                  <tr>
                    <td>Enter Destination</td>
                    <td className="td"></td>
                    <td>
                      <select
                        onChange={(e) => {
                          setToAddress(e.target.value);
                        }}
                      >
                        <option>Transport To</option>
                        <option>Pune</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>Hinjewadi</option>
                        <option>Karad</option>
                        <option>Sangli</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="tr"></tr>

                  <tr>
                    <td>Enter branchId</td>
                    <td className="td"></td>
                    <td>
                      <select
                        onChange={(e) => {
                          setbranchId(e.target.value);
                        }}
                      >
                        <option>select branchId</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="tr"></tr>
                  <tr>
                    <td>
                      <input
                        type="button"
                        value="Get started"
                        onClick={addOrders}
                      />
                    </td>
                  </tr>
                </table>
              </center>
            </div>

            <div className="imag">
              <input
                type="button"
                className="btn btn-success"
                value="Orders"
                onClick={() => {
                  navigate(
                    `/orderlist/${sessionStorage.getItem("customerId")}`
                  );
                }}
              />
              {"               "}
              <input
                type="button"
                className="btn btn-primary"
                value="Update Profile"
                onClick={() => {
                  navigate(`/profile/${sessionStorage.getItem("customerId")}`);
                }}
              />
              {"             "}

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
export default Customer;
