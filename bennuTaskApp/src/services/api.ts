import axios from 'axios';
import {Platform} from 'react-native';

const baseURL =
  Platform.OS === 'android' ? 'http://10.0.2.2:9001' : 'http://localhost:9001';

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
