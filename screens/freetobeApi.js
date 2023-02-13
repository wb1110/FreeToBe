import axios from 'axios';

export default axios.create({
  // localtunnel lt --port 3000
  baseURL: 'https://fine-plants-prove-75-15-142-127.loca.lt',
});
