import { useEffect, useInsertionEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getOrdersList } from "./services/orders";

import { toast } from "react-toastify";
import userEvent from "@testing-library/user-event";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const { customerId } = useParams();

  useEffect(() => {
    loadBranch(customerId);
  }, []);
  //   useEffect(() => {
  //     // get the list of products from server
  //     //
  //   }, [emps]);

  const loadBranch = async (customerId) => {
    debugger;
    const response = await getOrdersList(customerId);
    debugger;
    if (response !== null) {
      setOrders(response);
    } else {
      toast.error("Error while calling get problem api");
    }
  };

  return (
    <>
      <div className="length">
        <div>
          <table className="table table-bordered">
            <thead>
              <tr className="colr">
                <td>orderId</td>
                <td>orderWeight</td>
                <td>fromAddress</td>
                <td>toAddress</td>
                <td>orderStatus</td>
                <td>orderdDate</td>
                <td>ecpectedDeliveryDate</td>
                <td>amount</td>
                <td>trackingId</td>
                <td>Make Complain</td>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                return (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.orderWeight}</td>
                    <td>{order.fromAddress}</td>
                    <td>{order.toAddress}</td>
                    <td>{order.orderStatus}</td>
                    <td>{order.orderedDate}</td>
                    <td>{order.expectedDeliveryDate}</td>
                    <td>{order.amount}</td>
                    <td>{order.trackingId}</td>
                    <td>
                      {" "}
                      <input
                        type="button"
                        className="btn btn-warning"
                        value="complain"
                        onClick={() => {
                          navigate(`/complain/${order.orderId}`);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
              ;
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Orders;
