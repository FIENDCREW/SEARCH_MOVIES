import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com';

export const $api = axios.create({
  baseURL: baseUrl,
});
