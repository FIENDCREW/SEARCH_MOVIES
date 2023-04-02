import axios from 'axios';

const baseUrl = 'https://www.omdbapi.com';
export const APIKey = '8edd12cb';

export const $api = axios.create({
  baseURL: baseUrl,
  headers: {
    Autorization: APIKey,
  },
});
