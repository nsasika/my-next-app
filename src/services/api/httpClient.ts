import axios from 'axios';
import { EXTERNAL_API_BASE_URLS } from '@/config/api';

export const jsonPlaceholderClient = axios.create({
  baseURL: EXTERNAL_API_BASE_URLS.jsonPlaceholder,
});
