import axios from "axios";
import { createUrl, log } from "../utils/utils";

export async function getBranchList() {
  const url = createUrl("/branch/all");

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

export async function updateBranch(
  branchId,
  branchName,
  branchLocation,
  branchCode,
  branchManager
) {
  const url = createUrl("/branch/update");

  const body = {
    branchId,
    branchName,
    branchLocation,
    branchCode,
    branchManager,
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

export async function addBranch(
  branchName,
  branchCode,
  branchLocation,
  branchManager
) {
  const url = createUrl("/branch/add");

  const body = {
    branchName,
    branchCode,
    branchLocation,
    branchManager,
  };

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body);
    log(response.data);
    // console.log(response.data)
    return response.data;
  } catch (ex) {
    log(ex);
    return null;
  }
}

export async function editbranchDetails(branchId) {
  const url = createUrl(`/branch/${branchId}`);

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

export async function deleteBranch(branchId) {
  const url = createUrl(`/branch/delete/${branchId}`);

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
