import Axios from "axios";
const url = "http://localhost:3003/jobs";
export const getjobs = async () => {
  return await Axios.get(url);
};
export const adduser = async (user) => {
  return await Axios.post(url, user);
};
