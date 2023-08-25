// import { Link, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

import Footer from "./Footer";
import Header from "./Header";
import NotFound from "./NotFound";

import { useEffect, useState } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Profile from "./Profile";
import Login from "./Login";

import Customer from "./Customer";



import Auth from "./NavigateToFromLogin";
import { ToastContainer } from 'react-toastify';
import Orders from "./Orders";
import Complain from "./Complain";
import Track from "./Track";
import 'react-toastify/dist/ReactToastify.css';

function Launch() {
  const [firstName, setfirstName] = useState("User");

  const { SignIn, SignOut } = Auth();

  useEffect(() => {
    if (sessionStorage.getItem("firstName") != null) {
      setfirstName(sessionStorage.getItem("firstName"));
    } else {
      setfirstName("User");
    }
  }, []);

  const ShowButton = () => {
    if (firstName == "User") {
      return (
        <button className="btn btn-success" >
          Log In
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-warning"
          onClick={() => {
            SignOut(setfirstName);
          }}
        >
          Log out
        </button>
      );
    }
  };
  return (
    <>
      <Header></Header>

      <div className="nav">
        <div style={{ paddingLeft: 50 }}>
          Welcome {firstName}
          {ShowButton()}
        </div>

        {"   |   "}
        <Link to="/about">About Us</Link>
        {"   |   "}
        <Link to="/contact">Contact Us</Link>
        {"   |   "}
        <Link to="/signup">Signup</Link>
     
      </div>
      {/* <Switch>
       
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/admin" exact component={Admin} />
      
       
        <Route path="/add" exact component={Add} />
        <Route path="/Edit" exact component={Edit} />
        <Route path="/EmpList" exact component={EmpList} />
        <Route path="/addEmp" exact component={AddEmp} />
        <Route path="/EditEmp" exact component={EditEmp} />
        <Route path="/deliveryboy" exact component={DeliveryBoy} />
       

        <Route path="/" component={Login} />

        <Route path="*" component={NotFound} />
      </Switch> */}

      <Routes>
        {/* home component  */}
        {/* <Route path='/' element={} /> */}

        {/* login component */}
       

        {/* register component */}
        <Route path="/about" element={<About />} />

        {/* product-gallery component */}
        <Route path="/contact" element={<Contact />} />

        {/* cart component */}
        <Route path="/signup" element={<Signup />} />

        {/* my orders component */}
        <Route path="/profile/:customerId" element={<Profile />} />
      
       
        <Route path="/customer" element={<Customer/>} />
        <Route path="/orderlist/:customerId" element={<Orders/>} />
        <Route path="/complain/:orderId" element={<Complain/>} />
        <Route path="/track" element={<Track />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <ToastContainer />

      <Footer></Footer>
    </>
  );
}

export default Launch;
