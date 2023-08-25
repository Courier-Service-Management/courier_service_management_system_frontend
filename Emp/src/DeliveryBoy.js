import { toast } from "react-toastify";
import { useEffect, useInsertionEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./common.css";
import { useNavigate } from "react-router-dom";
import { getOrdersList  } from "./services/user";
 import { delivered as deliveredOrderApi } from "./services/order";
 import { cancel as cancelOrderApi } from "./services/order";
function DeliveryBoy()
{

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
   
  useEffect(() => {
    loadBranch(sessionStorage.getItem("branchId"));
  }, []);

  const loadBranch = async (branchId) => {
    debugger;
    const response = await getOrdersList(branchId);
    debugger;
    if (response !== null) {
      setOrders(response);
    } else {
      toast.error("Error while calling get /product api");
    }
  };

    const delivered = async (orderId) => {
    const response = await deliveredOrderApi(orderId);
    if (response !== null) {
      toast.success("employee deleted successfully");
      //navigate(`/emplist/${sessionStorage.getItem("branchId")}`)
      loadBranch(sessionStorage.getItem("branchId"));
    } else {
      toast.error("error while deleting employee");
    }
  };

  const cancel = async (orderId) => {
    const response = await cancelOrderApi(orderId);
    if (response !== null) {
      toast.success("employee deleted successfully");
      //navigate(`/emplist/${sessionStorage.getItem("branchId")}`)
      loadBranch(sessionStorage.getItem("branchId"));
    } else {
      toast.error("error while deleting employee");
    }
  };
    return(
        <div className="length"> 
        
<div>
            <table className="table table-bordered">
            <thead>
              <tr className="colr">
              <td>orderId</td>
                <td>firstName</td>
                <td>lastName</td>
                <td> mobile</td>
                <td>email</td>
                <td>expectedDeliveryDate</td>
                <td>orderedDate</td>
                <td>orderStatus</td>
                <td> fromAddress</td>
                <td>toAddress</td>
                <td> orderWeight</td>
                <td> amount</td>
              </tr>
            </thead>
              <tbody>
          {orders.map((order) => {
           return (
             <tr key={order.orderId}>
              <td>{order.orderId}</td>
               <td>{order.firstName}</td>
               <td>{order.lastName}</td>
               <td>{order.mobile}</td>
               <td>{order.email}</td>
               <td>{order.expectedDeliveryDate}</td>
               <td>{order.orderedDate}</td>
               <td>{order.orderStatus}</td>
               <td>{order.fromAddress}</td>
               <td>{order.toAddress}</td>
               <td>{order.orderWeight}</td>
               <td>{order.amount}</td>

                <td>
                 <button
                   onClick={() => {
                    delivered(order.orderId)
                     
                   }}
                   className="btn btn-success"
                 >
                   Delivered
                 </button>
               </td>
               <td>
                 <button
                   class="btn btn-danger"
                   onClick={() => {
                     cancel(order.orderId);
                   }}
                 >
                   Cancel
                 </button>
               </td>
             </tr>
           );
         })}
         ;
       </tbody>
          </table>
           
          </div>
        </div>
     
    )
}
export default DeliveryBoy;