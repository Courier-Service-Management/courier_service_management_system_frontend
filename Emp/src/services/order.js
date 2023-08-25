import axios from 'axios'
import { createUrl, log } from '../utils/utils'


export async function delivered(orderId) {
  const url = createUrl(`/orders/delivered/${orderId}`);

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.put(url);
    log(response.data);
    // console.log(response.data)
    return response.data;
  } catch (ex) {
    log(ex);
    return null;
  }
}


export async function cancel(orderId) {
    const url = createUrl(`/orders/cancel/${orderId}`);
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.put(url);
      log(response.data);
      // console.log(response.data)
      return response.data;
    } catch (ex) {
      log(ex);
      return null;
    }
  }