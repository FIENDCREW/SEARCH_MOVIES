import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com';
export const APIKey = '8edd12cb';

export const $api = axios.create({
  timeout: 1000,
  baseURL: baseUrl,
  headers: {
    Autorization: APIKey,
  },
});
