//https://644bd7ef4bdbc0cc3a9c1bc1.mockapi.io/api/tweets/tweets/tweets

import axios from 'axios';
import { baseUrl, limit, totalPage } from 'refs/refs';

axios.defaults.baseURL = baseUrl;
const params = new URLSearchParams({
  limit,
  totalPage,
});
console.log(params);
export const getHeroData = async page => {
  try {
    const { data } = await axios.get(
      `/api/tweets/tweets?${params}&page=${page}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const updateDataFollowing = async (userId, userFollowers, follow) => {
  try {
    const { data } = await axios.put(`/api/tweets/tweets/${userId}`, {
      followers: userFollowers,
      isFollow: follow,
    });
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
