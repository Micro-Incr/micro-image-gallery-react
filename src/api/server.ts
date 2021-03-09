import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export default axios.create({
  baseURL: `${SERVER_URL}/api/v1`,
  headers: {
    Authorization: 'Client-ID 8LUrgOkBh-zX9U2LO-QNUciRbDHF1HBwZdCp70bJdnE'
  }
});
