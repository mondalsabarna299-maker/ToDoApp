import axios from 'axios';

const api = axios.create({
  baseURL: 'https://to-do-app-jccq.vercel.app/api', // 🔥 Change to your Render URL when deployed
});

export default api;
