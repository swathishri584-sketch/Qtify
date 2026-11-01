import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    // The API wraps the list as { data: [...] }
    return Array.isArray(res.data) ? res.data : res.data.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
