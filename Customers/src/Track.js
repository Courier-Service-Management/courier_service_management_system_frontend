import { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";

import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { trackOrder as trackOrderApi } from "./services/orders";
import { log } from "./utils/utils";
import axios from "axios";

function Track() {
  const [trackOrders, settrackorders] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    trackOrder();
  }, []);

  const trackOrder = async () => {
    const response = await trackOrderApi(sessionStorage.getItem("trackingId"));

    if (response !== null) {
      settrackorders(response);
      // go back to login
      //navigate("/customer");
    } else {
      toast.error("srrory some network issue");
    }
  };

  return (
    <>
      {/* {trackorders.map((trackOrder) => { */}
      {/* return ( */}
      <div className="length">
        <center>
          <table className="table table-bordered">
            <tr>
              <center>
                <td className="fa">fromAddres :</td>
                <td className="td">{trackOrders.fromAddress}</td>
              </center>
            </tr>
            <tr >
                <center>
                    <td>|</td>
                </center>
            </tr>
            <tr >
                <center>
                    <td>|</td>
                </center>
            </tr>
            <tr >
                <center>
                    <td>|</td>
                </center>
            </tr>
            <tr >
                <center>
                    <td>|</td>
                </center>
            </tr>
            <tr >
                <center>
                    <td>|</td>
                </center>
            </tr>
            <tr>
              <center>
                <td className="fa">toAddress :</td>
                <td >{trackOrders.toAddress}</td>
              </center>
            </tr>
            <tr className="tr"></tr>
            <tr>
              <center>
                {" "}
                <td className="fa">expectedDeliveryDate :</td>
                <td >{trackOrders.expectedDeliveryDate}</td>
              </center>
            </tr>
            <tr className="tr"></tr>
            <tr>
              <center >
                <td className="fa">orderedDate :</td>
                <td >{trackOrders.orderedDate}</td>
              </center>
            </tr>
            <tr className="tr"></tr>
          </table>
        </center>
      </div>
    </>
  );
}
export default Track;
