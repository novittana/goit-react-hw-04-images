import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33730971-81d6bb40aa99486f10ac73082';

export const fetchPhotoByQuery = async (query, page = 1) => {
  const params = {
    key: API_KEY,
    q: query,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };
  const { data } = await axios.get(`${BASE_URL}`, { params });

  return data;
};


console.log(fetchPhotoByQuery())
