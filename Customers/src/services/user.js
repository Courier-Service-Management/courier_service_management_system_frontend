import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function signUp(
  firstName,
  lastName,
  email,
  password,
  mobile,
  gender,
 
) {
  const url = createUrl('/customer/signup')
  
  const body = {
    firstName,
    lastName,
    email,
    password,
    mobile,
    gender,
   
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    // console.log(response.data)
    return response.data
  
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function loginUser(email, password) {
  const url = createUrl('/customer/signIn')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}



export async function getEmpList(branchId) {
  const url = createUrl(`/branch/branchemp/${branchId}`);

  try {
    // get the current user's token from session storage
    // const { token } = sessionStorage

    // // create a header to send the token
    // const header = {
    //   headers: {
    //     token,
    //   },
    // }

    // make the api call using the token in the header
    const response = await axios.get(url);
    log(response.data);
    return response.data;
  } catch (ex) {
    log(ex);
    return null;
  }
}


export async function updateCustomer(
      customerId,
      firstName,
      lastName,
      email,
      gender,
      mobile,
      password,
      
      
) {
  const url = createUrl("/customer/update");

  const body = {
    customerId,
    firstName,
    lastName,
    email,
    gender,
    mobile,
    password,
    
    
  };

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.put(url, body);
    log(response.data);
    // console.log(response.data)
    return response.data;
  } catch (ex) {
    log(ex);
    return null;
  }
}



export async function editCustomerDetails(customerId) {
  const url = createUrl(`/customer/customerdetails/${customerId}`);

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.get(url);
    log(response.data);
    // console.log(response.data)
    return response.data;
  } catch (ex) {
    log(ex);
    return null;
  }
}

export async function addEmp(
  firstName,
  lastName,
  email,
  password,
  mobile,
  gender,
  branchId,
  role
) {
  const url = createUrl('/emps/add')
  
  const body = {
    firstName,
    lastName,
    email,
    password,
    mobile,
    gender,
    branchId,
    role
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    // console.log(response.data)
    return response.data
  
  } catch (ex) {
    log(ex)
    return null
  }
}


export async function deleteEmp(empId) {
  const url = createUrl(`/emps/${empId}`);

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.delete(url);
    log(response.data);
    // console.log(response.data)
    return response.data;
  } catch (ex) {
    log(ex);
    return null;
  }
}