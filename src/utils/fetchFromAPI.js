import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const defaultOptions = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '975da3ed4fmsh6bdf19ab78bdab7p13540ejsn849959bf5d6a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url, queryParams = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      ...defaultOptions,
      params: { ...defaultOptions.params, ...queryParams }
    });
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

