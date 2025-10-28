import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // 🔥 Change to your Render URL when deployed
});

export default api;
