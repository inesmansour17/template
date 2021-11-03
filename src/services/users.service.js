import Axios from "axios";

let baseUrl = "http://localhost:5000/api/users/";

export const addUser = async (user) => {
  const result = await Axios.post(baseUrl, user);
  console.log(result);
  return result.data;
};
